import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Propertie} from "./properties.entity";
import {User} from "./user.entity";


@Entity("schedules_user_properties")
class Schedules_user_properties {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string;

    @ManyToOne(() => Propertie, propertie => propertie.schedules_properties)
    propertie: Propertie;

    @ManyToOne(() => User, user => user.schedules_user)
    user: User;
}

export {Schedules_user_properties}