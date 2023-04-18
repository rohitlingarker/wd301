import React from 'react';
import './TaskCard.css'

const TaskCard = (props) => {
  let date:string;
  if (props.dueDate){
    date="Due on: "+props.dueDate;
  }else{
    date="Completed on: "+props.completedAtDate;
  }
  return (
    <div className="TaskItem">
      <h2>{props.title}</h2>
      <p>{date}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard