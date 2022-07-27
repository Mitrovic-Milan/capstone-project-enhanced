const TodosList = ({todos}) => {
  return (
    <div>
      {todos.map(todo => (
        <li className="list-item" key={todo.id}>
          <span className="list">{todo.title}</span>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
