import { InputType, Field } from '@nestjs/graphql';
import { TodoStatus } from '../entities/todo.entity';

@InputType()
export class CreateTodoInput {
	@Field(() => String)
	title: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => TodoStatus, { defaultValue: TodoStatus.TODO })
	status: TodoStatus;

	@Field({ nullable: true })
	dueDate?: Date;
}