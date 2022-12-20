import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from "typeorm";
import {Address} from "./addresses.entity";

@Entity("properties")
class Propertie {
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column({default: false})
    sold: Boolean;

    @Column({type: "float"})
    value: Number;

    @Column({type: "integer"})
    size: Number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Address) @JoinColumn()
    address: Address;
}

export { Propertie };