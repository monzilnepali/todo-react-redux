import React from 'react'

export default function TodoListContainer() {
  return (
    <div>
      <div className="note-list">
        {filterTodo().map(element => <Note data={element} key={element.id} />)}
      </div>
    </div>
  )
}
