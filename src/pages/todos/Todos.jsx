import { useState } from 'react';
import './todos.css';
import { Btn } from '../../UIKit/Elements/btn/Btn';

const todosList = [
    {
        id: 1,
        task: "going to school",
        isCompleted: false
    },
    {
        id: 2,
        task: "doing the dishes",
        isCompleted: true
    }
]


export const Todos = () => {
    const [list, setList] = useState(todosList);

    const handleToggle = (task) => {
        task.isCompleted = !task.isCompleted;
        setList([...list]);
    }

    return (
        <div>
            <h2>Todos list</h2>

            <div>
                {list.map(task => (
                    <div key={task.id} className='flex gap-2'>
                        <div className={`todo-item ${task.isCompleted && "completed"}`}>
                            {task.task}
                        </div>
                        <Btn onClick={() => handleToggle(task)}>Done</Btn>
                    </div>

                ))}
            </div>
        </div>
    )
}