import { useState } from 'react'
import {TodolistItem} from "./components/TodolistItem/TodolistItem.tsx";
import './App.css'
import { v1 } from 'uuid';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type FilteredValues = 'all'|'active'|'completed'

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
      { id: v1(), title: 'Сходить в магазин', isDone: true },
      { id: v1(), title: 'Починить машину', isDone: true },
      { id: v1(), title: 'Поспать', isDone: false },
  ])

  const [filter, setFilter] = useState<FilteredValues>('all')

    // Добавляем новое дело
    const addTask = (title: string) => {
      const newTask = {
        id: v1(),
        title,
        isDone: false
      }
      setTasks([newTask, ...tasks])
    }

    // Удаляем дело
    const deleteTask = (taskId: string) => {
      setTasks([...tasks.filter(task => task.id !== taskId)])
    }

    // Меняем статус задачи
    const changeTaskStatus = (taskId: string, newStatus: boolean) => {
      setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: newStatus} : task))
    }

    // Меняем значение фильтра
    const changeFilterValue = (value: FilteredValues) => {
      setFilter(value)
    }

    let filtredTasks = tasks
  switch (filter) {
    case "active":
      filtredTasks = tasks.filter(task => !task.isDone)
      break;
    case "completed":
      filtredTasks = tasks.filter(task => task.isDone)
      break;
  }

  return (
    <div>
        <TodolistItem
          tasks={filtredTasks}
          changeFilterValue={changeFilterValue}
          addTask={addTask}
          deleteTask={deleteTask}
          changeTaskStatus={changeTaskStatus}
        />
    </div>
  )
}

export default App
