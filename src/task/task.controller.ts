import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { Task } from './entities/task.entity.js';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto):Promise<Task> {
    return await this.taskService.create(createTaskDto);
  }

  // @Get()
  // async findAll():Promise<Task[]> {
  //   return this.taskService.findAll();
  // }

  @Get()
  async findAll(@Query('priority') priority?:string, @Query('status') status?:string):Promise<Task[]> {
    return this.taskService.findAll(priority, status);
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto):Promise<Task> {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<void> {
    return this.taskService.remove(id);
  }
}
