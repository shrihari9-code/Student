import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students.controller';
import { StudentRepository } from './students.repository';
import { StudentService } from './students.service';

@Module({
    controllers:[StudentsController],
    imports:[TypeOrmModule.forFeature([StudentRepository])],
    providers:[StudentService]
})
export class StudentsModule {}
