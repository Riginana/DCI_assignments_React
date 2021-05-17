import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <FormComp />

    </div>
  );
}

function FormComp(){

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [about, setAbout] = useState();


  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  
  const aboutHandler = (e) => {
    setAbout(e.target.value)
  }

  return(
    <div>
      <div className='container'>
        <form className='form'>
          <h1>Tell us more</h1>

          <section className='fields'>
              <label >First Name: { name }</label>
              <input onChange = { nameHandler } type="text" placeholder='First Name'/>
              <label >Last Name: { lastName }</label>
              <input onChange={ lastNameHandler } type="text" placeholder='Last Name'/>
          </section>

          <section class="fields">
        <label>Your email: { email }</label>
        <input onChange={ emailHandler } type="email" placeholder="Tell us how to contact you" />
      </section>

      <section class="fields">
        <label>Tell us about yourself: { about }</label>
        <textarea onChange= { aboutHandler } rows="5"></textarea>
      </section>

      <section class="toggle">
        <label class="toggle-label">Want to know more?</label>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </section>

      <input type="submit" value="Submit" disabled></input>
        </form>
      </div>
    </div>
  )
}

export default App;
