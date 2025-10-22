import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
	constructor(private readonly todoService: TodoService) {}

	@Query(() => [Todo], { name: 'todos' })
	async findAll(): Promise<Todo[]> {
		return this.todoService.findAll();
	}

	@Query(() => Todo, { name: 'todo' })
	async findOne(@Args('id', { type: () => ID }) id: string): Promise<Todo> {
		return this.todoService.findOne(id);
	}

	@Mutation(() => Todo)
	async createTodo(
		@Args('createTodoInput', {type: () => CreateTodoInput}) createTodoInput: CreateTodoInput,
	): Promise<Todo> {
		return this.todoService.create(createTodoInput);
	}

	@Mutation(() => Todo)
	async updateTodo(
		@Args('updateTodoInput', {type: () => UpdateTodoInput}) updateTodoInput: UpdateTodoInput,
	): Promise<Todo> {
		return this.todoService.update(updateTodoInput.id, updateTodoInput);
	}

	@Mutation(() => Todo)
	async removeTodo(@Args('id', { type: () => ID }) id: string): Promise<Todo> {
		return this.todoService.remove(id);
	}
}
