import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(10, 15)
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message: 'The password is too weak, it must have at least one lowercase and uppercase letter, it must have a special symbol, it must be 10 to 15 characters and at least one number.',
  })
  password: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  confirmPassword: string;
}
