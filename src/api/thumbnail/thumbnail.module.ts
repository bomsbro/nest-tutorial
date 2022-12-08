import { Module } from '@nestjs/common';
import { ThumbnailController } from './thumbnail.controller';
import { ThumbnailService } from './thumbnail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thumbnail } from './models/entities/thumbnail.entity';
import { ThumbnailRepository } from './thumbnail.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Thumbnail])],
  controllers: [ThumbnailController],
  providers: [ThumbnailService, ThumbnailRepository],
})
export class ThumbnailModule {}
