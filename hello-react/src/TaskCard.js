import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div className="TaskItem">
      <h2>{props.title}</h2>
      <p>Completed on: due date...</p>
      <p>Assignee: name...</p>
    </div>
  )
}

export default TaskCard