import { Module } from '@nestjs/common';
import { ThumbnailModule } from './thumbnail/thumbnail.module';

@Module({
  imports: [ThumbnailModule],
  controllers: [], // Controllers are imported from the modules
  providers: [], // Services are imported from the modules
})
export class ApiModule {}
