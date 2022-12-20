import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn, ManyToOne
} from "typeorm";
import {Address} from "./addresses.entity";
import {Category} from "./categories.entity";

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

    @ManyToOne(() => Category, category => category.propeties)
    category: Category;
}

export { Propertie };