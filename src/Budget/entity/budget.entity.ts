import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'budget'})
export class BudgetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  count: number;

  @OneToMany(()=> UserEntity, (user: UserEntity) => user.budget,{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  counts: Array<BudgetEntity>
}
