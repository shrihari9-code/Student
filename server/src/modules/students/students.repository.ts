import { EntityRepository, Repository } from "typeorm";
import { Student } from "./students.entity";

@EntityRepository(Student)
export class StudentRepository extends Repository<Student>{
    
}