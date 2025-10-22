import { useGetTodosQuery } from './generated/graphql';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
	const { data, loading, error , refetch} = useGetTodosQuery();

	console.log('App data:', data);

	if (loading)
		return <div className='loading'>Loading...</div>;
	if (error)
		return <div className='error'>Error: {error.message}</div>;

	return (
		<div className="App">
			<header className='header'>
				<h1>ToDo_List</h1>
			</header>
			
			<main className='main'>
				<TodoForm onSuccess={refetch} />
				<TodoList todos={data?.todos || []} onUpdate={refetch} />
			</main>
		</div>
	)
}

export default App

		{/* <h1>Todo App</h1>
		<h2>Todos ({data?.todos.length || 0})</h2>
		<ul>
			{data?.todos.map((todo) => (
			<li key={todo.id}>
				<strong>{todo.title}</strong> - {todo.status}
			</li>
			))}
		</ul> */}