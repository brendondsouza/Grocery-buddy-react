import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show: false, msg:'', type:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      showAlert(true, 'Please enter value','danger')
    } 
    else if(name && isEditing){ 
      //deal with edit
    }else{
      //show success alert
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  return (
  <section className="section-center">
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert}/>}
      <h3>Grocery bud</h3>
      <div className="form-control">
        <input 
          type="text" 
          className='grocery' 
          placeholder='e.g. eggs' 
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    <div className="grocrery-container">
      <List items={list} />
      <button className='clear-btn'>clear items</button>
    </div>
  </section>
  )
}

export default App
