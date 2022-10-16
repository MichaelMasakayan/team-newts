import React, {useState} from 'react'
import "./App.css"
import data from "./mock-data.json"

const App = () => {

  const [contacts, setContacts] = useState(data);

  return (
    <div className='app-container'>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=> (
          <tr>
            <td>{contact.name}</td>
            <td>{contact.price}</td>
            <td>{contact.quantity}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default App