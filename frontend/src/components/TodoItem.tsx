import type { GetTodosQuery } from '../generated/graphql';
import { TodoStatus, useUpdateTodoMutation, useRemoveTodoMutation } from '../generated/graphql';
import './TodoItem.css';

interface TodoItemProps {
	todo: GetTodosQuery['todos'][0];
	onUpdate: () => void;
}

function TodoItem({ todo, onUpdate }: TodoItemProps) {
	const [updateTodo] = useUpdateTodoMutation();
	const [removeTodo] = useRemoveTodoMutation();

	const handleToggleStatus = async () => {
		try {
			const newStatus = todo.status === TodoStatus.Done ? TodoStatus.Todo : TodoStatus.Done;
		
			await updateTodo({
				variables: {
					input: {
						id: todo.id,
						status: newStatus,
					},
				},
			});
			onUpdate();
		} catch (error) {
			console.error('Failed to update todo:', error);
		}
	};

	const handleDelete = async () => {
		if (!window.confirm('このタスクを削除しますか?')) return;

		try {
			await removeTodo({
				variables: { id: todo.id },
			});
			onUpdate();
		} catch (error) {
			console.error('Failed to delete todo:', error);
		}
	};

	const isCompleted = todo.status === TodoStatus.Done;

	return (
		<div className={`todo-item ${isCompleted ? 'completed' : ''}`}>
		<input
			type="checkbox"
			className="todo-checkbox"
			checked={isCompleted}
			onChange={handleToggleStatus}
		/>
		<span className="todo-title">{todo.title}</span>
		<button className="delete-button" onClick={handleDelete}>
			🗑️
		</button>
		</div>
	);
}

export default TodoItem;