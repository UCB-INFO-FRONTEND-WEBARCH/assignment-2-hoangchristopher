import React from 'react';

function TaskCounter ( { tasks } ) {
    const numTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <>
            <div className="task-counter">
                {numTasks === 0 ? ( 
                    <p>No Tasks</p>
                ) 
                : (
                    <p>{completedTasks.length} / {numTasks}</p>
                )}
            </div>
        </>
    );
}

export default TaskCounter;