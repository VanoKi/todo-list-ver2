import {Button} from "../Button/Button.tsx";
import {TaskType} from "../../App.tsx";

type Props = {
  tasks: TaskType
  changeFilterValue: () => void
}

export const TodolistItem = (props: Props) => {
    const {tasks, changeFilterValue} = props
  return (
        <div>
            <div>
                <input/>
                <Button title={'+'} onClick={() => {}}/>
            </div>
            <div>
                <Button title={'All' } onClick={() => {}}/>
                <Button title={'Completed'} onClick={() => {}}/>
                <Button title={'Active'} onClick={() => {}}/>
            </div>
            <ul>
              {tasks.map(task => {
                return (
                  <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <Button title={'X'} onClick={() => {}}/>
                  </li>
                )
              })}
            </ul>
        </div>
    )
}