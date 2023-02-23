import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentsModule } from './modules/students/students.module';

@Module({
  imports: [StudentsModule,TypeOrmModule.forRoot(typeOrmConfig)
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
