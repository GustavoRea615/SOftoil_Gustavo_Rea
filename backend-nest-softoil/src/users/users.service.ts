import { Injectable, BadRequestException, ForbiddenException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { LogService } from '../log/log.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private logService: LogService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, confirmPassword, ...rest } = createUserDto;

      if (password !== confirmPassword) {
        throw new BadRequestException('Passwords do not match, please verify');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await this.prisma.user.create({
        data: {
          ...rest,
          password: hashedPassword,
        },
      });

      await this.logService.createLog(user.id, 'User created');
      return user;

    } catch (error) {
      console.error('Error creating user:', error);
      throw new BadRequestException('Error creating user');
    }
  }

  async findAll(currentUserId: number) {
    const currentUser = await this.prisma.user.findUnique({
      where: { id: currentUserId },
    });

    if (!currentUser || currentUser.role !== 'admin') {
      throw new ForbiddenException('Access denied');
    }

    const users = await this.prisma.user.findMany();
    await this.logService.createLog(currentUserId, 'Fetched all users');
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    await this.logService.createLog(id, 'Fetched user');
    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    await this.logService.createLog(id, 'User updated');

    return user;
  }

  async remove(id: any) {
    const user = await this.prisma.user.delete({
      where: { id },
    });

    await this.logService.createLog(id, 'User deleted');

    return user;
  }
}
