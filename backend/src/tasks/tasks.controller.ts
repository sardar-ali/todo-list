import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return this.tasksService.createTask(body.title, body.description);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(Number(id));
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: number,
    @Body() body: { id: number; title: string; description: string },
  ) {
    return this.tasksService.updateTask(id, body);
  }
}
