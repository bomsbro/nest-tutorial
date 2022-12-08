import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thumbnail } from './models/entities/thumbnail.entity';
import { ThumbnailRepository } from './thumbnail.repository';

@Injectable()
export class ThumbnailService {
  constructor(
    @InjectRepository(ThumbnailRepository)
    private readonly thumbnailRepository: ThumbnailRepository,
  ) {}
  /*Multiple items  */
  readThumbnailList(): Promise<Thumbnail[]> {
    return this.thumbnailRepository.findAll();
  }

  /*Single item */
  createThumbnail(req: {
    name: string;
    description: string;
    url: string;
    originalFileName: string;
  }): Promise<Thumbnail> {
    return this.thumbnailRepository.onCreate(req);
  }

  readThumbnail(): string {
    return 'Thumbnail World!';
  }

  updateThumbnail(): string {
    return 'Thumbnail World!';
  }

  deleteThumbnail(): string {
    return 'Thumbnail World!';
  }
}
