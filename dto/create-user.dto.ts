import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email пользователя',
  })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'Имя пользователя' })
  name: string;

  @ApiProperty({ example: 'password123', description: 'Пароль' })
  password: string;
}
