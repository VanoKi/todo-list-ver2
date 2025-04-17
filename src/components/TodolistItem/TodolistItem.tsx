import {Button} from "../Button/Button.tsx";
import {FiltredValues, TaskType} from "../../App.tsx";
import {ChangeEvent, useState} from "react";

type Props = {
  tasks: TaskType
  changeFilterValue: (value: FiltredValues) => void
  addTask: (title: string) => void
  deleteTask: (taskId: string) => void
  changeTaskStatus: (taskId: string, newStatus: boolean) => void
}

export const TodolistItem = (props: Props) => {
  const {tasks, changeFilterValue, addTask, deleteTask, changeTaskStatus} = props
  const [title, setTitle] = useState('')

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}

  const changeFilterValueHandler = () => {
      changeFilterValue('all')
  }

  const changeFilterValueActiveHandler = () => {
    changeFilterValue('active')
  }

  const changeFilterValueCompletedHandler = () => {
    changeFilterValue('completed')
  }

  const addTaskHandler = () => {
    addTask(title)
    setTitle('')
  }

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={onChangeTitle}/>
        <Button title={'+'} onClick={addTaskHandler}/>
      </div>
      <div>
        <Button title={'All'} onClick={changeFilterValueHandler}/>
        <Button title={'Completed'} onClick={changeFilterValueActiveHandler}/>
        <Button title={'Active'} onClick={changeFilterValueCompletedHandler}/>
      </div>
      <ul>
        {tasks.map(task => {
          const deleteTaskHandler = () => {
            deleteTask(task.id)
          }

          const changeTaskStatusHandler: (e: ChangeEvent<HTMLInputElement>) => {
            changeTaskStatus(task.id, e.currentTargent)
          }

          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler}/>
              <span>{task.title}</span>
              <Button title={'X'} onClick={() => {}}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}