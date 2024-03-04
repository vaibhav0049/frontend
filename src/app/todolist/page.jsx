'use client'
import React, { useState } from 'react'

const TodoList = () => {
    // to show updates on page we use state way  useState() to create variable and useState only returns 2value
    // first variable is used to read and 2nd one is function to update value
    // when fun returns multiple value then use array like const [a,b,c]
    let [taskList, updateTaskList]= useState([])
    console.log(taskList);
    // console.log(updateTaskList);
    const addTask=(e)=>{ 
        if (e.code==='Enter'){
            console.log(e.target.value)
            const obj ={text:e.target.value ,completed:false};
            // ..... js fuction used to take out elment from the  array 
            updateTaskList([obj,...taskList])
            e.target.value='';
        }
    }
    const deleteTask=(index)=>{
        console.log(index);
        const temp=taskList;
        temp.splice(index,1);
    updateTaskList([...temp]);
    }
    const completedTask=(index) =>{
        console.log(index);
        const temp=taskList;
        temp[index].completed=true;
        updateTaskList([...temp]);
        console.log(temp)


       


    }
    

  return (
    <div className='bg-success vh-100 '>
       
        <div className="container py-4">
            <h1 className="display-2 fw-bold text-center"> ToDo list</h1>
            <div className="card shadow">
                <div className="card-header">
                    <input 
                    // onKeyDown() tell which key is pressed
                    onKeyDown={addTask}
                    type="text" className='form-control border-2 border-success'
                    placeholder='add your task here' />
                </div>
                <div className="card-body">
                    {
                        // taskList.map(n=> <h1>{n.text}</h1> )
                        taskList.map((n,index)=> 
                        <div className='p-4 shadow d-flex justify-content-between mb-2' key={index}>
                        <input type="checkbox" checked={n.completed}/>
                            <p>{n.text}</p>
                            {
                              n.completed?
                                <span className='badge bg-success'> completed</span>:
                                <span className='badge bg-warning'> pending</span>
                            }

                            <button onClick={() => {deleteTask(index)}} className='btn btn-success'> Delete</button>
                            <buttton onClick={()=>{completedTask(index)}} className='btn btn-primary'>{n.completed? 'Undo Task':'completd Task'}</buttton>
                          
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default TodoList;