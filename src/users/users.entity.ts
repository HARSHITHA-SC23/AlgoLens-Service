import { BTC } from "src/btc/btc.entity";
import { History } from "src/history/history.entity";
import { LSC } from "src/lsc/lsc.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Date;

    @OneToMany(() => LSC, (lsc) => lsc.user)
    lscs: LSC[];
    
    @OneToMany(() => BTC, (btc) => btc.user)
    btcs: BTC[];
        
    @OneToMany(() => History, (history) => history.user)
    histories: History[];
}
