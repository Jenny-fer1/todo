var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        this.todos.push({
            id: this.nextId,
            task: task,
            completed: false,
            dueDate: dueDate
        });
        this.nextId++;
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (todo)
            todo.completed = true;
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (t) { return t.id !== id; });
    };
    TodoList.prototype.listTodos = function () {
        return __spreadArray([], this.todos, true);
    };
    TodoList.prototype.filterByStatus = function (completed) {
        return this.todos.filter(function (t) { return t.completed === completed; });
    };
    TodoList.prototype.updateTask = function (id, newTask) {
        var todo = this.todos.find(function (t) { return t.id === id; });
        if (todo)
            todo.task = newTask;
    };
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (t) { return !t.completed; });
    };
    return TodoList;
}());
// Demo usage
var myList = new TodoList();
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
