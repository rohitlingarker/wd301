export interface TaskItem {
    id:number ,
    description: string;
    title: string;
    dueDate:string;
    deleteTask:(id:number)=>void;
  }
export interface TaskAppState {
    tasks: TaskItem[];
  }