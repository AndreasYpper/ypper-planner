import React from "react";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = React.useState({ name: "", complete: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.name.trim() === "") {
      setTodo({ name: "", complete: false });
      return;
    }
    addTodo(todo);
    setTodo({ name: "", complete: false });
  };
  return (
    <div className="todo-form-container w-full max-w-xs">
      <div className="px-5">
        <h1>Add Todo</h1>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="todo-input block text-gray-700 text-sm font-bold mb-2">
            Todo:{" "}
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={todo.name}
            onChange={(event) =>
              setTodo({ name: event.target.value, complete: false })
            }
            type="text"
            id="todo-input"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-transparent hover:bg-green-300 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
