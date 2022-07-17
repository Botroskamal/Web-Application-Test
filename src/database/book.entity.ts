import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string

    @Column()
    ISBN: number

    @Column()
    Author: string

    @Column()
    year: number

    @Column()
    publisher: string

    @Column()
    category: string
}