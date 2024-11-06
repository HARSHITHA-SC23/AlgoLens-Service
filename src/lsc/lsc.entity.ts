import { History } from "src/history/history.entity";
import { Users } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LSC {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    input_string: string

    @Column()
    longest_unique_substring: string

    @Column()
    longest_substring_length: number

    @Column("text", {array: true})
    unique_substrings: string[]

    @CreateDateColumn({type: "timestamp"})
    calculated_at: Date
    
    @ManyToOne(() => Users, (user) => user.lscs, {onDelete: 'CASCADE'})
    user: Users
}
