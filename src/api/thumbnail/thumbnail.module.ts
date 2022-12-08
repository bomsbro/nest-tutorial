import { Module } from '@nestjs/common';
import { ThumbNailController } from './thumbnail.controller';
import { ThumbNailService } from './thumbnail.service';

@Module({
  imports: [],
  controllers: [ThumbNailController],
  providers: [ThumbNailService],
})
export class ThumbNailModule {}
