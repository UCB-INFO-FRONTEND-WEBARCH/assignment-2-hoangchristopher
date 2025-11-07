import { useState } from 'react'


function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState("");

    const updateText = (e) => {
        setTaskText(e.target.value);
    };

    const submitTask = (e) => {
        e.preventDefault();

        onAddTask(taskText);
        setTaskText("");
    };




    return (
        <>
        <form className="task-form" onSubmit={submitTask}>
            <input
                type="text"
                placeholder="Add task..."
                value={taskText}
                onChange={updateText}
            />
            <button type="submit">Add</button>
        </form>


        </>
    );
}

export default TaskForm;