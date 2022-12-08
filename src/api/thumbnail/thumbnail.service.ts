import { Injectable } from '@nestjs/common';

@Injectable()
export class ThumbNailService {
  /*Multiple items  */
  getThumbNailList(): string {
    return 'ThumbNail World!';
  }

  /*Single item */
  postThumbNail(): string {
    return 'ThumbNail World!';
  }

  getThumbNail(): string {
    return 'ThumbNail World!';
  }

  putThumbNail(): string {
    return 'ThumbNail World!';
  }

  deleteThumbNail(): string {
    return 'ThumbNail World!';
  }
}
