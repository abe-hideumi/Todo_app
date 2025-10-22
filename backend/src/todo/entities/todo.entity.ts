import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { TodoStatus as PrismaTodoStatus } from '@prisma/client';

// PrismaのEnumをそのまま使う
export const TodoStatus = PrismaTodoStatus;
export type TodoStatus = PrismaTodoStatus;

// GraphQLでEnumを使えるように登録
registerEnumType(TodoStatus, {
	name: 'TodoStatus',
	description: 'Todoのステータス',
});

@ObjectType()
export class Todo {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	title: string;

	@Field(() => String, { nullable: true })
	description?: string | null;

	@Field(() => TodoStatus)
	status: TodoStatus;

	@Field(() => Date, { nullable: true })
	dueDate?: Date | null;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;
}