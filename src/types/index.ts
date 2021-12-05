export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface Schema {
  tasks: Array<Task>;
}
