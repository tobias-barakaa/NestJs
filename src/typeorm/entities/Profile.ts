import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'user_profile'}) 
export class Profile {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    firstName: string;

    @Column()
    password: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    dob: string;

}