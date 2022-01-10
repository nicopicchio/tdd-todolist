class TodoList {
    constructor() {
        this.todoList = [];
    }

    createItem(text) {
        const todoItem = {
            id: this.todoList.length+1,
            text: text,
            status: 'incomplete'
        }
        this.todoList.push(todoItem);
        return todoItem
    }

    fetchFullList() {
        return this.todoList
    }

    setCompletedByID(id) {
        this.todoList[id-1].status = 'complete'
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


    // searchAndReturn(id) {
    //     for (element of this.todoList) {
    //         if (element.id === id) {
    //             return element.text
    //         }
    //     }
    //     return 'The item does not exist.'
    // }

    // removeItem(id) {
    //     for (element of this.todoList) {
    //         if (element.id === id) {
    //             todoList.splice(element.id, 1)
    //         }
    //     }
    // }
}

module.exports = TodoList
