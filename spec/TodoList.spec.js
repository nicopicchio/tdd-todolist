const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.createItem("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("get all todo items", () => {
    const expected = [
    {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    },
    {
      id: 2,
      text: "meal prep",
      status: "incomplete"
    }
  ]
    todoList.createItem('turn the heating on!')
    todoList.createItem('meal prep')
    const result = todoList.fetchFullList()
    expect(result).toEqual(expected)
  })

  it("set a todo completed by its ID", () => {
    // set up
    const expected = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "complete"
      },
      {
        id: 2,
        text: "meal prep",
        status: "incomplete"
      }
    ]
    // execute
    todoList.createItem('turn the heating on!')
    todoList.createItem('meal prep')
    const result = todoList.setCompletedByID(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("return only incomplete todos", () => {
    // set up
    const expected = [
      {
        id: 1,
        text: "meal prep",
        status: "incomplete"
      },
      {
        id: 2,
        text: "play piano",
        status: "incomplete"
      }
    ]
    // execute
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnIncomplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("return only complete todos", () => {
    // set up
    const expected = [
      {
        id: 3,
        text: "code",
        status: "complete"
      }
    ]
    // execute
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnComplete()
    // verify
    expect(result).toEqual(expected)
  })

})
