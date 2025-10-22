import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<Todo[]> {
		return this.prisma.todo.findMany({
			orderBy: { createdAt: 'desc' },
		});
	}

	async findOne(id: string): Promise<Todo> {
		const todo = await this.prisma.todo.findUnique({
			where: { id },
		});

		if (!todo) {
			throw new NotFoundException(`Todo with ID ${id} not found`);
		}

		return todo;
	}

	async create(createTodoInput: CreateTodoInput): Promise<Todo> {
		return this.prisma.todo.create({
			data: createTodoInput,
		});
	}

	async update(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo> {
		const todo = await this.prisma.todo.findUnique({
			where: { id },
		});

		if (!todo) {
			throw new NotFoundException(`Todo with ID ${id} not found`);
		}

		return this.prisma.todo.update({
			where: { id },
			data: updateTodoInput,
		});
	}

	async remove(id: string): Promise<Todo> {
		const todo = await this.prisma.todo.findUnique({
			where: { id },
		});

		if (!todo) {
			throw new NotFoundException(`Todo with ID ${id} not found`);
		}

		return this.prisma.todo.delete({
			where: { id },
		});
	}
}