const app = new Vue({
    el: '#app',
    data: {
      newTodoText: '',
      todos: [
        { id: 1, text: "Fare la spesa", done: false },
        { id: 2, text: "Pulire la casa", done: true },
        { id: 3, text: "Preparare il pranzo", done: false }
      ]
    },
    methods: {
      addTodo() {
        if (this.newTodoText.trim() !== '') {
          const newTodo = {
            id: Date.now(),
            text: this.newTodoText,
            done: false
          };
          this.todos.push(newTodo);
          this.newTodoText = '';
        }
      },
      removeTodo: function(todoId) {
        this.todos = this.todos.filter(function(todo) {
          return todo.id !== todoId;
        });
      }
    }
  });