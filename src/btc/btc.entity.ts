import { History } from "src/history/history.entity";
import { Users } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BTC {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("int", {array: true})
    tree_data: number[]

    @Column()
    leaf_to_node_sum: number

    @Column("int", {array: true})
    leaf_to_node_path: number[]

    @Column()
    any_to_any_node_sum: number

    @Column("int", {array: true})
    any_to_any_node_path: number[]

    @CreateDateColumn({type: "timestamp"})
    calculated_at: Date
    
    @ManyToOne(() => Users, (user) => user.lscs, {onDelete: 'CASCADE'})
    user: Users

}
