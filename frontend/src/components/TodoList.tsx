import type { GetTodosQuery } from '../generated/graphql';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
	todos: GetTodosQuery['todos'];
	onUpdate: () => void;
}

function TodoList({ todos, onUpdate }: TodoListProps) {
	if (todos.length === 0) {
		return <div className="empty-state">タスクがありません</div>;
	}

	return (
		<div className="todo-list">
		{todos.map((todo) => (
			<TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
		))}
		</div>
	);
}

export default TodoList;