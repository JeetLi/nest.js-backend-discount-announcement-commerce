import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Название вашего API')
    .setDescription('Описание API')
    .setVersion('1.0')
    .addBearerAuth() 
    .addTag('users') 
    .addTag('cart')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST',
  });
  
  await app.listen(3001);
}
bootstrap();
