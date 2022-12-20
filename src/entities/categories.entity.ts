import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Propertie} from "./properties.entity";

@Entity("categories")
class Category{
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    name: String;

    @OneToMany(() => Propertie, propertie => propertie.id)
    propeties: Propertie[];
}

export { Category };