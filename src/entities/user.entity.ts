import { hashSync } from "bcryptjs";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
    @Column()
  name: string;

    @Column({unique: true})
  email: string;

    @Column()
  password: string;

    @Column()
  isAdm: boolean;

    @Column({ default: true })
  isActive: boolean;

    @CreateDateColumn()
  createdAt: Date;

    @UpdateDateColumn()
  updatedAt: Date;

    @PrimaryGeneratedColumn("uuid")
  id: string;

    @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}

export { User };
