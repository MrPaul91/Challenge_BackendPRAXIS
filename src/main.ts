import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Note-User example')
    .setDescription('Note and User API Carlos Santos V and Juan Pablo Villegas G')
    .setVersion('1.0')
    .addTag('BackendHomework')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
