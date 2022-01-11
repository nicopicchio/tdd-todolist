const TodoList = require("../src/TodoList.js")

// const currentDate = new Date().substring(0, 15)

const daysOfTheWeek = {
  
}

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      creation: Date().substring(0, 15)
    }
    const result = todoList.createItem("turn the heating on!")
    expect(result).toEqual(expected)
  })

  it("get all todo items", () => {
    const expected = [{
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 2,
        text: "meal prep",
        status: "incomplete",
        creation: Date().substring(0, 15)
      }
    ]
    todoList.createItem('turn the heating on!')
    todoList.createItem('meal prep')
    const result = todoList.fetchFullList()
    expect(result).toEqual(expected)
  })

  it("set a todo completed by its ID", () => {
    const expected = [{
        id: 1,
        text: "turn the heating on!",
        status: "complete",
        creation: Date().substring(0, 15)
      },
      {
        id: 2,
        text: "meal prep",
        status: "incomplete",
        creation: Date().substring(0, 15)
      }
    ]
    todoList.createItem('turn the heating on!')
    todoList.createItem('meal prep')
    const result = todoList.setCompletedByID(1)
    expect(result).toEqual(expected)
  })

  it("return only incomplete todos", () => {
    const expected = [{
        id: 1,
        text: "meal prep",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 2,
        text: "play piano",
        status: "incomplete",
        creation: Date().substring(0, 15)
      }
    ]
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnIncomplete()
    expect(result).toEqual(expected)
  })

  it("return only complete todos", () => {
    const expected = [{
      id: 3,
      text: "code",
      status: "complete",
      creation: Date().substring(0, 15)
    }]
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnComplete()
    expect(result).toEqual(expected)
  })

  it('search and return a todo item by ID or return error message', () => {
    const expected = {
      id: 1,
      text: "drink more water",
      status: "incomplete",
      creation: Date().substring(0, 15)
    }
    todoList.createItem('drink more water')
    const result = todoList.searchAndReturnByID(1)
    expect(result).toEqual(expected)
  })

  it('search and return a todo item by ID or return error message', () => {
    const expected = 'The item was not found!'
    todoList.createItem('drink more water')
    const result = todoList.searchAndReturnByID(2)
    expect(result).toEqual(expected)
  })

  it("remove a todo item by its ID", () => {
    const expected = [
      {
        id: 1,
        text: "meal prep",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 3,
        text: "code",
        status: "incomplete",
        creation: Date().substring(0, 15)
      }
    ]

    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    const result = todoList.removeTodoItemByID(2)
    expect(result).toEqual(expected)
  })

  it('search todo items by day and return them in a list', () => {
    const expected = [
      {
        id: 1,
        text: "clean windows",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 2,
        text: "code",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 3,
        text: "pay insurance",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 4,
        text: "update documents",
        status: "incomplete",
        creation: Date().substring(0, 15)
      },
      {
        id: 5,
        text: "food shopping",
        status: "incomplete",
        creation: Date().substring(0, 15)
      }
    ]
    todoList.createItem('clean windows')
    todoList.createItem('code')
    todoList.createItem('pay insurance')
    todoList.createItem('update documents')
    todoList.createItem('food shopping')
    const result = todoList.searchItemByDay(2)
    expect(result).toEqual(expected)
  })
})