import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(5000);
};
bootstrap();
