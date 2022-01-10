const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const result = todoList.createItem("turn the heating on!")
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
    todoList.createItem('turn the heating on!')
    todoList.createItem('meal prep')
    const result = todoList.setCompletedByID(1)
    expect(result).toEqual(expected)
  })

  it("return only incomplete todos", () => {
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
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnIncomplete()
    expect(result).toEqual(expected)
  })

  it("return only complete todos", () => {
    const expected = [
      {
        id: 3,
        text: "code",
        status: "complete"
      }
    ]
    todoList.createItem('meal prep')
    todoList.createItem('play piano')
    todoList.createItem('code')
    todoList.setCompletedByID(3)
    const result = todoList.returnComplete()
    expect(result).toEqual(expected)
  })

})
