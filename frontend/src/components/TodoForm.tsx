import { useState } from 'react';
import { useCreateTodoMutation, TodoStatus } from '../generated/graphql';
import './TodoForm.css';

interface TodoFormProps {
	onSuccess: () => void;
}

function TodoForm({ onSuccess }: TodoFormProps) {
	const [title, setTitle] = useState('');
	const [createTodo, { loading }] = useCreateTodoMutation();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!title.trim()) return;

		try {
			console.log('Submitting todo with title:', title.trim());
			const result = await createTodo({
				variables: {
					createTodoInput: {
						title: title.trim(),
						status: TodoStatus.Todo,
					},
				},
			});
			console.log('Create todo result:', result);
			setTitle('');
			onSuccess();
		} catch (error) {
			console.error('Failed to create todo:', error);
		}
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
		<input
			type="text"
			className="todo-input"
			placeholder="タスクを追加"
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			disabled={loading}
		/>
		<button type="submit" className="add-button" disabled={loading}>
			+
		</button>
		</form>
	);
}

export default TodoForm;