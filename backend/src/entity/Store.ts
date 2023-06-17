import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from "typeorm";

@Entity()
export class Store extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  description: string;

  @Column("varchar")
  category: string;

  @Column("varchar")
  contact: string;

  @Column("double precision")
  latitude: number;

  @Column("double precision")
  longitude: number;
}
