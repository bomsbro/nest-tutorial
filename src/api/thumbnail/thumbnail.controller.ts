import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { Thumbnail } from './models/entities/thumbnail.entity';
import { ThumbnailService as ThumbnailService } from './thumbnail.service';

@Controller('api/thumbnails')
export class ThumbnailController {
  constructor(private readonly thumbnailService: ThumbnailService) {}

  /*Multiple items  */
  @Get()
  getThumbnailList(): Promise<Thumbnail[]> {
    return this.thumbnailService.readThumbnailList();
  }

  /*Single item */
  @Post()
  postThumbnail(
    @Body()
    dto: {
      name: string;
      description: string;
      url: string;
      originalFileName: string;
    },
  ): Promise<Thumbnail> {
    return this.thumbnailService.createThumbnail(dto);
  }

  @Get('/:id')
  getThumbnail(): string {
    return this.thumbnailService.readThumbnail();
  }

  @Put('/:id')
  putThumbnail(): string {
    return this.thumbnailService.updateThumbnail();
  }

  @Delete('/:id')
  deleteThumbnail(): string {
    return this.thumbnailService.deleteThumbnail();
  }
}
