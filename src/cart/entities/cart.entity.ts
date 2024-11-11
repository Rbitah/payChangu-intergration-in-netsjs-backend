import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    product_Id:number

    @Column()
    productname:string

    @Column()
    description:string

    @Column()
    amount:string
}
