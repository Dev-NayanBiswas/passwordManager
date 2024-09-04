import React, { useState } from "react";

function Form() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({name:"",email:"",password:""})

  function savePassword(newPass){
    console.log(newPass.target)
    console.log(form)
    let password = localStorage.getItem("password");
    let passwordArray;
    if(password){
        passwordArray = JSON.parse(password)
        console.log(passwordArray)
    }
    else{
        passwordArray=[]
        console.log(passwordArray)
    }
    passwordArray.push(newPass)
    localStorage.setItem("password",JSON.stringify(passwordArray));
    console.log("Pass saved successfully:", passwordArray)
  }

  function handleChange(e){
        e.preventDefault();
        setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <section className='my-4'>
        <label htmlFor='name' className='label_default'>
          Name
        </label>
        <br />
        <input
          required  onChange={handleChange}
          type='text'
          name='name'
          id='name'
          value={form.name}
          placeholder='full name....'
          className='input_default'
        />
      </section>
      <section className='my-4'>
        <label htmlFor='email' className='label_default'>
          Email
        </label>
        <br />
        <input
          required onChange={handleChange}
          type='email'
          name='email'
          id='email'
          value={form.email}
          placeholder='email here....'
          className='input_default'
        />
      </section>
      <section className='my-4 relative'>
        <label htmlFor='name' className='label_default'>
          Password
        </label>
        <br />
        <input
          required onChange={handleChange}
          type={!show ? "password" : "text"}
          name='password'
          id='password'
          value={form.password}
          placeholder='password'
          className='input_default'
        />
        <span
          onClick={() => setShow(!show)}
          className='absolute pr-3 right-3 bottom-2 text-black'>
          {!show ? (
            <i className='fa-solid fa-eye-slash'></i>
          ) : (
            <i className='fa-solid fa-eye'></i>
          )}
        </span>
      </section>
      <section className='w-full text-center'>
        <button 
            onClick={savePassword} 
            className='button_effect'>
          <lord-icon
            src='https://cdn.lordicon.com/jgnvfzqg.json'
            trigger='hover'></lord-icon>
          submit
        </button>
      </section>
    </>
  );
}

export default Form;
