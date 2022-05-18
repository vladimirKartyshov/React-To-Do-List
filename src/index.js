import React from 'react'
import ReactDOM from 'react-dom/client'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
  const todoData = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Make asome App', important: true, id: 2},
    {label: 'Drink beer', important: false, id: 3},
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
