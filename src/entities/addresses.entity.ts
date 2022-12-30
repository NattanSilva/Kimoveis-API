import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("addresses")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: String;

    @Column()
    district: String;

    @Column()
    zipCode: String;

    @Column({nullable: true})
    number?: String;

    @Column()
    city: String;

    @Column()
    state: String;
}

export { Address };