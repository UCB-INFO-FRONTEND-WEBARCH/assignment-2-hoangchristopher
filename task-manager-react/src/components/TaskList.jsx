import React from 'react'
import TaskItem from './TaskItem'

function TaskList( { tasks, onToggle, onDelete } ) {
    if (tasks.length === 0) {
        return (
            <p>Tasks completed!</p>
        )
    }

    return (
        <>
            <ul className="task-list">
                {tasks.map(task => (
                    <TaskItem
                        id={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </>
    );
}

export default TaskList