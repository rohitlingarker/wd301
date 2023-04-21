import React from "react";
import { TaskItem } from "./types";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }

//   addTask = (task: TaskItem) => {
//     this.setState((state, props) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="container py-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700">
//           Smarter Tasks
//         </h1>
//         <h1 className="text-md mb-6 text-slate-600">
//           <span className="font-bold">Project: </span>
//           Graduation Final Year Project (Revamp college website)
//         </h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="border border-slate-200 rounded-xl p-4">
//             <h1 className="text-slate-500 font-bold text-center mb-2">
//               Pending
//             </h1>
//             <TaskForm addTask={this.addTask} />
//             <TaskList tasks={this.state.tasks} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const compare = (task1:TaskItem,task2 : TaskItem)=>{
    return (task1.title===task2.title && task1.description===task2.description && task1.dueDate===task2.dueDate)
  }
  const delTask = (task: TaskItem) => {
    let i=taskAppState.tasks.length;
    let tasks = taskAppState.tasks
    while(i--){
      if(compare(tasks[i],task)){
        tasks.splice(i,1)
        setTaskAppState({"tasks":tasks})
        break
      }
    }
  };
  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={taskAppState.tasks} delTask={delTask} />
    </div>
  );
};

export default TaskApp;