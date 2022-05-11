import React from 'react'

import TodoListItem from './todo-list-item'

const TodoList = () => {
  return (
    <div>
      <ul>
        <li>
          <TodoListItem />
        </li>
        <li>
          <TodoListItem />
        </li>
      </ul>
    </div>
  )
}

export default TodoList
