import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../src/static`,
    }),
    ApiModule,
  ],
})
export class AppModule {}
