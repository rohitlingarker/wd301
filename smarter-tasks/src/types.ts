export interface TaskItem {
    description: string;
    title: string;
    dueDate:string;
    deleteTask:(task:TaskItem)=>void;
  }