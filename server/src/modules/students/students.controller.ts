import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentsDto } from './dto/createStudents.dto';
import { StudentService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private StudentService:StudentService){

    }

    @Get('/')
    getAllStudents(){
        return this.StudentService.getAllStudents()
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
   async CreateStudents(@Body() studentdata:CreateStudentsDto){
        return await this.StudentService.CreateStudents(studentdata)
        
    }

    @Get('/:id')
   getQuizById(@Param('id',ParseIntPipe) id:number){
       return this.StudentService.getById(id);

   }

//    @Put('/:id')
//    UpdateById(@Param('id',ParseIntPipe) id:number){
//     return this.StudentService.UpdateById(id)
//    }
@Delete('/:id')
Delete(@Param('id',ParseIntPipe) id:number){
    return this.StudentService.Delete(id)
}
}
