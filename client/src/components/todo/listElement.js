import { FaHandPointRight } from "react-icons/fa";
function ListElements(props) {

    const { todoValue } = props

    const deleteTodo = () => {
        props.deleteTodo(todoValue.id)
    }
    const toggleChecked = () => {
        props.toggleChecked(todoValue.id)
    }
    return (
        <div className="todo-element">
            <FaHandPointRight className="point-icon" />
            <p style={{ textDecoration: todoValue.checked ? 'line-through' : 'none' }}>{todoValue.value}</p>
            <div className="actions">
                <input type="checkbox" checked={todoValue.checked} onChange={toggleChecked} />
                <button className="delete-btn" onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    )
}
export default ListElements