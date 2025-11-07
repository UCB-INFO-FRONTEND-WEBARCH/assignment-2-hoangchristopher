import Ract from 'react'

function TaskItem( { task, onToggle, onDelete } ) {
    return (
        <>
        <li className="checkbox">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                />
            <p className={task.completed ? 'task-completed' : ''}>{task.text}</p>
            <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
        </li>
        </>
    );
}

export default TaskItem;