import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'thumbnail' })
@Unique(['id'])
export class Thumbnail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '썸네일 이미지 파일 이름' })
  name: string;

  @Column({ type: 'varchar', length: 255, comment: '썸네일 이미지 설명' })
  description: string;

  @Column({ type: 'varchar', length: 255, comment: '썸네일 이미지 url' })
  url: string;

  @Column({ type: 'varchar', length: 30, comment: '서버 저장 전 썸네일의 원래이름' })
  originalFileName: string;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
  deletedAt?: Date | null;
}
