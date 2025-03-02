interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    addTodo(task: string, dueDate: Date): void {
      this.todos.push({
        id: this.nextId,
        task,
        completed: false,
        dueDate
      });
      this.nextId++;
    }
  
    completeTodo(id: number): void {
      const todo = this.todos.find(t => t.id === id);
      if (todo) todo.completed = true;
    }
  
    removeTodo(id: number): void {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  
    listTodos(): TodoItem[] {
      return [...this.todos];
    }
  
    filterByStatus(completed: boolean): TodoItem[] {
      return this.todos.filter(t => t.completed === completed);
    }
  
    updateTask(id: number, newTask: string): void {
      const todo = this.todos.find(t => t.id === id);
      if (todo) todo.task = newTask;
    }
  
    clearCompleted(): void {
      this.todos = this.todos.filter(t => !t.completed);
    }
  }
  
  // Demo usage
  const myList = new TodoList();
  
  // Add some todos
  myList.addTodo("Wash clothes", new Date("02-03-2025"));
  myList.addTodo("Feed baby", new Date("02-03-2025"));
  
  console.log("Initial todos:");
  console.log(myList.listTodos());
  
  // Complete first todo
  myList.completeTodo(1);
  console.log("\nAfter completing todo 1:");
  console.log(myList.listTodos());
  
  // Update second todo
  myList.updateTask(2, "Wash motorcycle");
  console.log("\nAfter updating todo 2:");
  console.log(myList.listTodos());
  
  // Filter completed todos
  console.log("\nCompleted todos:");
  console.log(myList.filterByStatus(true));
  
  // Clear completed todos
  myList.clearCompleted();
  console.log("\nAfter clearing completed:");
  console.log(myList.listTodos());