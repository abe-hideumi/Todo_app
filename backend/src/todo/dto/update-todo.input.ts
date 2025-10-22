import { InputType, Field, ID } from '@nestjs/graphql';
import { TodoStatus } from '../entities/todo.entity';

@InputType()
export class UpdateTodoInput {
	@Field(() => ID)
	id: string;

	@Field(() => String, { nullable: true })
	title?: string;

	@Field(() => String, { nullable: true })
	description?: string;

	@Field(() => TodoStatus, { nullable: true })
	status?: TodoStatus;

	@Field({ nullable: true })
	dueDate?: Date;
}