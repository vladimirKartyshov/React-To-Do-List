import React from 'react'

import TodoListItem from './todo-list-item'

const TodoList = () => {
  return (
    <div>
      <ul>
        <li>
          <TodoListItem label="Drink Coffee" />
        </li>
        <li>
          <TodoListItem label="Build React App" important />
        </li>
      </ul>
    </div>
  )
}

export default TodoList
