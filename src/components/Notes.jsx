import React, { useEffect } from 'react'
import './css/Notes.css'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageTodo, removeTodo } from '../features/todo/todoSlice';
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { setTodo } from '../features/todo/settodoSlice';

const Notes = () => {
    const todos = useSelector(state => state.todoSlice.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(localStorageTodo());
    }, [])


    // delete Note
    const delteNote = (id, text) => {
        const conformation = confirm(`Are you Sure You want to delete this note \n ${text}`)
        if (conformation) {
            dispatch(removeTodo(id))
        }
    }

    // update Note
    const updateTodo = (id, text) => {
        dispatch(setTodo(text));
        dispatch(removeTodo(id));
    }


    return (
        <div className="note_main">
            <h1>Notes</h1>
            <div className={todos.length > 0 ? "notes_container" : ""}>
                <div className='notes'>
                    <ul>
                        {
                            todos.map((e, i) => {
                                return <li key={i}>
                                    <div className='text'>
                                        {e.text}
                                    </div>
                                    <div className="btns">
                                        <button onClick={() => updateTodo(e.id, e.text)} className='updateBtn'><BsPencilSquare /></button>

                                        <button onClick={() => delteNote(e.id, e.text)} className='deleteBtn'><AiFillDelete /></button>

                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <hr style={{ width: "85%", height: "2px", backgroundColor: "black", marginTop: "20px" }} />
        </div>
    )
}

export default Notes
