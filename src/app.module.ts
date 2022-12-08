import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    ApiModule,
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../src/static`,
    }),
  ],
})
export class AppModule {}
