import { useEffect, useState } from "react";
import { fetchTodos } from "../../data/todos";

import './Todo.css';
function Todo() {
    const [todosRaw, setTodosRaw] = useState([]);
    const [onlyWaiting, setOnlyWaiting] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [todos, setTodos] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [curPage, setCurpage] = useState(1);

    useEffect(() => {
        setCurpage(1);
    }, [numpage]);

    useEffect(() => {
        setNumpage(Math.ceil(todosRaw.length / itemsPerPage));
    }, [itemsPerPage, todosRaw]);

    useEffect(() => {
        setTodosRaw(fetchTodos());
    }, []);

    useEffect(() => {
        const filteredTodos = onlyWaiting ? todosRaw.filter((todo) => !todo.completed) : todosRaw;
        const startIndex = (curPage - 1) * itemsPerPage;
        const paginatedTodos = filteredTodos.slice(startIndex, startIndex + itemsPerPage);
        setTodos(paginatedTodos);
    }, [todosRaw, onlyWaiting, itemsPerPage, curPage]);

    const handleFirstPage = () => setCurpage(1);
    const handlePrevPage = () => setCurpage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurpage((prev) => Math.min(prev + 1, numpage));
    const handleLastPage = () => setCurpage(numpage);

    return (
        <div className="todo-container">
            {/* filters */}
            <div className="todo-filters-container">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={(e) => setOnlyWaiting(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show only waiting</label>
                </div>
                <div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue={5}
                        style={{ width: '200px' }}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value={5}>5 items per page</option>
                        <option value={10}>10 items per page</option>
                        <option value={50}>50 items per page</option>
                        <option value={100}>100 items per page</option>
                    </select>
                </div>
            </div>
            {/* table */}
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th style={{ textAlign: 'right' }}>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td><span className="badge bg-secondary">{todo.id}</span></td>
                            <td style={{ textAlign: 'left' }}>{todo.title}</td>
                            <td style={{ textAlign: 'right' }}>
                                <span className={"badge " + (todo.completed ? "bg-success" : "bg-warning")}>
                                    {todo.completed ? 'done' : 'waiting'} &nbsp;
                                    <span className={"bi " + (todo.completed ? "bi-check" : "bi-clock")}></span>
                                </span>
                                <button className="btn btn-danger">
                                    <span className="bi bi-trash"></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* page control */}
            <div>
                <button className="btn btn-outline-primary todo-space" onClick={handleFirstPage}>First</button>
                <button className="btn btn-outline-primary todo-space" onClick={handlePrevPage}>Prev</button>
                <span className="todo-space">{curPage} / {numpage}</span>
                <button className="btn btn-outline-primary todo-space" onClick={handleNextPage}>Next</button>
                <button className="btn btn-outline-primary todo-space" onClick={handleLastPage}>Last</button>
            </div>
        </div>
    );
}

export default Todo;
