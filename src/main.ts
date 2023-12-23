import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const configService = app.get(ConfigService);

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  /* Configuración Swagger */
  const config = new DocumentBuilder()
    .setTitle('Seguridad')
    .setDescription('Modulo de seguridad')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /* Despligue aplicación */
  await app.listen(configService.get('PORT'));
  console.log(
    `La Aplicación se esta ejecutando en el puerto ${await app.getUrl()}`,
  );
}
bootstrap();
