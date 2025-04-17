import {Button} from "../Button/Button.tsx";

type Props = {}

export const TodolistItem = (props: Props) => {
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
                <li>
                    <input type="checkbox"/>
                    <span>text</span>
                    <Button title={'X'} onClick={() => {}}/>
                </li>
            </ul>
        </div>
    )
}