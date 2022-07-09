import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
const List = ({items, removeItem, editItem, completeItem}) => {

  return(
    <div className="grocery-List">
      {items.map(item => {
        const {id, title, completed} = item
        return (
        <article key={id} className={`grocery-item ${completed && 'strikethrough'}`}>
          <p className='title'>{title}</p>
          <div className="btn-container">
            <button type='button' className='complete-btn' onClick={() => completeItem(id)}>
              {completed ? < ImRadioChecked /> : <ImRadioUnchecked />}
            </button>
            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
              <FaEdit  />
            </button>
            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
        )
      })}
    </div>
  )
}

export default List
