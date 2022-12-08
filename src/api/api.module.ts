import { Module } from '@nestjs/common';
import { ThumbNailModule } from './thumbnail/thumbnail.module';

@Module({
  imports: [ThumbNailModule],
  controllers: [], // Controllers are imported from the modules
  providers: [], // Services are imported from the modules
})
export class ApiModule {}
