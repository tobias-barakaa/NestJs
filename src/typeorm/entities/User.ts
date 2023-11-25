import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";

@Entity({name: 'users'})
export class User {
@PrimaryGeneratedColumn()
id: number;

@Column({ unique: true })
username: String;

@Column()
password: String;

@Column()
createdAt: Date;

@Column({ nullable: true })
authStrategy: String;

@OneToOne(() => Profile)
@JoinColumn()
profile: Profile;

}