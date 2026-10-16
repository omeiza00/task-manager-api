import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity.js';
import { FindOptionsOrder, FindOptionsWhere, ILike, Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository:Repository<Task>,
  ){}

  // Create new task
  async create(createTaskDto: CreateTaskDto):Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask)
  }

  // Get all tasks
  async findAll(priority?: string, status?: string, sort?: string):Promise<Task[]> {
    // if (!status) {
    //   return await this.taskRepository.find()
    // }

    const where:FindOptionsWhere<Task> = {}

    if (status) {
      where.status = status
    }

    if(priority){
      where.priority = priority
    }

    const order:FindOptionsOrder<Task>={}

    if (sort !== undefined && sort !== 'priority' && sort !== 'createdAt') {
      throw new BadRequestException(`Invalid sort value. Allowed values are 'priority' and 'createdAt'.`)
    } else if (sort === 'priority') {
      order.priority = 'ASC'
    } else {
      order.createdAt = 'DESC'
    }

    return await this.taskRepository.find({
      where: where,
      order: order
    });
  }

  // Get a task
  async findOne(id: string):Promise<Task> {
    const task = await this.taskRepository.findOne({where: {id}})

    if (!task) {
      throw new NotFoundException(`Task with ID: ${id} not found`)
    }
    return task;
  }

  // Update a task
  async update(id: string, updateTaskDto: UpdateTaskDto):Promise<Task> {
    const task = await this.findOne(id)
    const updateTask = this.taskRepository.merge(task, updateTaskDto)
    return await this.taskRepository.save(updateTask);
  }

  // Delete a task
  async remove(id: string):Promise<void> {
    const deleteTask = await this.taskRepository.delete(id)
    if (deleteTask.affected === 0) {
      throw new NotFoundException(`Task with ID: ${id} not found`)
    }
  }
}
