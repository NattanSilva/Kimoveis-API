import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn, ManyToOne, OneToMany
} from "typeorm";
import {Address} from "./addresses.entity";
import {Category} from "./categories.entity";
import {Schedules_user_properties} from "./schedules_user_properties.entity";

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

    @ManyToOne(() => Category, category => category.properties)
    category: Category[];

    @OneToMany(() => Schedules_user_properties, schedules_user_properties => schedules_user_properties.propertie)
    schedules_properties: Schedules_user_properties[];
}

export { Propertie };