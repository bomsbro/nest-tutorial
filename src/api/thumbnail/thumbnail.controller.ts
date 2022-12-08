import { Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { ThumbNailService as ThumbNailService } from './thumbnail.service';

@Controller('api/thumbnails')
export class ThumbNailController {
  constructor(private readonly appService: ThumbNailService) {}

  /*Multiple items  */
  @Get()
  getThumbNailList(): string {
    return this.appService.getThumbNailList();
  }

  /*Single item */
  @Post()
  postThumbNail(): string {
    return this.appService.postThumbNail();
  }

  @Get('/:id')
  getThumbNail(): string {
    return this.appService.getThumbNail();
  }

  @Put('/:id')
  putThumbNail(): string {
    return this.appService.putThumbNail();
  }

  @Delete('/:id')
  deleteThumbNail(): string {
    return this.appService.deleteThumbNail();
  }
}
