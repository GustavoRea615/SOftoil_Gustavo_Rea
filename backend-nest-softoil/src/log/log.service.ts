import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async createLog(userId: number, action: string) {
    return this.prisma.log.create({
      data: {
        userId,
        action,
      },
    });
  }

  async findAll() {
    return this.prisma.log.findMany();
  }
}
