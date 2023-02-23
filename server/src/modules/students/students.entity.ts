import { Col } from "sequelize/types/utils";
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Students')
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar'
    })
    Name:string

    @Column({
        type:'integer',
    })
    age:number

    @Column({
        type:'varchar'
    })
    course:string

    @Column({
        type:'boolean',
        default:1
    })
    isActive:boolean
    
}