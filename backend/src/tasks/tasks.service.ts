import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Assuming you have a PrismaService
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, description: string): Promise<Task> {
    return this.prisma.task.create({
      data: { title, description },
    });
  }

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: { id },
    });
  }
  async updateTask(
    id: number,
    body: { id: number; title: string; description: string },
  ): Promise<Task> {
    return this.prisma.task.update({
      where: { id: body.id },
      data: {
        title: body.title,
        description: body.description,
      },
    });
  }
}
