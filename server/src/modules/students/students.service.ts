import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateStudentsDto } from "./dto/createStudents.dto";
import { StudentRepository } from "./students.repository";

@Injectable()
export class StudentService{
    constructor(@InjectRepository(StudentRepository) private studentRepository:StudentRepository){}

 async getAllStudents(){
    return await this.studentRepository.find()
 }
async CreateStudents(student:CreateStudentsDto){

    return await this.studentRepository.save(student)
}

async getById(id:number){
    return await this.studentRepository.findOne(id)
}
// async UpdateById(id:number){
//     return await this.studentRepository.update({where:{id:id}})
// }
async Delete(id:number){
    return await this.studentRepository.delete(id)
}

 }
