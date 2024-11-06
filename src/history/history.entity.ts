import { BTC } from "src/btc/btc.entity";
import { LSC } from "src/lsc/lsc.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Users, (user) => user.histories, {onDelete: "CASCADE"})
    user: Users

    @Column()
    calcId: string; 

    @Column({ type: "enum", enum: ['LSC', 'BTC'] })
    entityType: 'LSC' | 'BTC';

    @Column()
    feature_type: string

    @Column()
    action: string

    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date
}
