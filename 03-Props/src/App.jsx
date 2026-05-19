import React from 'react'
import Card from '../components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card img ="https://images.unsplash.com/photo-1777144462969-748b7c4b08fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEpyNmZBTXRmY2lVfHxlbnwwfHx8fHw%3D" user = "Yash patil" p = "Frontend Developer"/>
      <Card img ="https://images.unsplash.com/photo-1777034707514-d5fd29adba97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEpyNmZBTXRmY2lVfHxlbnwwfHx8fHw%3D" user = "Sneha Gawande" p = "Backend Developer"/>
    </div>
  )
}

export default App