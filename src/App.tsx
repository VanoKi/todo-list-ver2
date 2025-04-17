import { useState } from 'react'
import {TodolistItem} from "./components/TodolistItem/TodolistItem.tsx";
import './App.css'
import { v4 } from 'uuid';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState(<TaskType>[
      { id: v4(), title: 'Сходить в магазин', isDone: true },
      { id: v4(), title: 'Починить машину', isDone: true },
      { id: v4(), title: 'Поспать', isDone: false },
  ])

    // Добавляем новое дело
    const addTask = () => {}

    // Удаляем дело
    const deleteTask = () => {}

    // Меняем статус задачи
    const changeTaskStatus = () => {}

    // Меняем значение фильтра
    const changeFilterValue = () => {}

  return (
    <div>
        <TodolistItem tasks={tasks}/>
    </div>
  )
}

export default App
