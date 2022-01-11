class TodoList {
  constructor() {
    this.todoList = [];
    this.daysOfTheWeek = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }
  }

  createItem(text) {
    const todoItem = {
      id: this.todoList.length + 1,
      text: text,
      status: 'incomplete',
      creation: Date().substring(0, 15)
    }
    this.todoList.push(todoItem);
    return todoItem
  }

  fetchFullList() {
    return this.todoList
  }

  setCompletedByID(id) {
    this.todoList[id - 1].status = 'complete'
    return this.todoList
  }

  returnIncomplete() {
    const output = []
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].status === 'incomplete') {
        output.push(this.todoList[i])
      }
    }
    return output
  }

  returnComplete() {
    const output = []
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].status === 'complete') {
        output.push(this.todoList[i])
      }
    }
    return output
  }

  searchAndReturnByID(id) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === id) {
        return this.todoList[i]
      }
    }
    return 'The item was not found!'
  }

  removeTodoItemByID(id) {
    for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i].id === id) {
            this.todoList.splice(i, 1)
        }
    }
    return this.todoList
  }

  searchItemByDay(day) {
    const dayArray = []
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].creation.includes(day)) {
        dayArray.push(this.todoList[i])
      }
    }
    return dayArray
  }
}

module.exports = TodoList