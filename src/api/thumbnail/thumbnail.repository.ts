import { DataSource, Repository } from 'typeorm';
import { Thumbnail } from './models/entities/thumbnail.entity';

export class ThumbnailRepository extends Repository<Thumbnail> {
  constructor(private dataSource: DataSource) {
    super(Thumbnail, dataSource.createEntityManager());
  }
  //썸네일 생성
  async onCreate(req: {
    name: string;
    description: string;
    url: string;
    originalFileName: string;
  }): Promise<Thumbnail> {
    const thumbnail = this.create(req);
    await this.save(thumbnail);
    return thumbnail;
  }
  //모든 썸네일 조회
  async findAll(): Promise<Thumbnail[]> {
    return await this.find();
  }
}
