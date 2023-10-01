import React, { useState } from 'react'
import './css/Forminput.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTodo } from '../features/todo/settodoSlice';
import { addTodo } from '../features/todo/todoSlice';

const Forminput = () => {

  const dispatch = useDispatch();
  var data = useSelector(state => state.settodoSlice.todovar);

  const formSubmit = (e) => {
    e.preventDefault();
    if (data) {
      var todo_data = data.replace(/\s+/g, '').length;
      if (todo_data > 0) {
        dispatch(addTodo(data));
        dispatch(setTodo(data));
        dispatch(setTodo(""));
      }
      else {
        dispatch(setTodo(""));
      }
    }
  }


  return (
    <div className='formdiv'>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder='Enter your note here...' value={data} onChange={(e) => dispatch(setTodo(e.target.value))} />
        <button type="submit" className='btn'>Save</button>
      </form>
    </div>
  )
}

export default Forminput