import React, { useState, useEffect } from "react";
import Table from "./Table";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

function Form() {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);
    const [edit, setEdit] = useState(false)


    useEffect(() => {
        let localData = localStorage.getItem("localData");
        if (localData) {
            try{
                const parseData = JSON.parse(localData)
                if(Array.isArray(parseData)){
                    setPasswordArray(parseData)
                }
                else{
                    setPasswordArray([])
                }
            }
            catch(error){
                console.log("Error in Parsing LocalData",error)
                setPasswordArray([]);
            }
            
        }
    }, [])


    function savePassword() {

        if(form.name.length<3 && form.email.length<10 && form.password.length<8){
            alert("Try Again")
            return;
        }
        if (Object.values(form).every(data => data === "")) {
            alert("Can't Submit Empty Form")
            return;
        }
        
        if(edit){
            let newArray = passwordArray.map(array => array.id=== form.id? form: array)
            setPasswordArray(newArray);
            localStorage.setItem("localData",JSON.stringify(newArray))
        }
        else{
            let id = crypto.randomUUID();
        // let withId = {...form,id}
        
        setPasswordArray([...passwordArray, {...form,id:id}]);
        localStorage.setItem("localData", JSON.stringify([...passwordArray, {...form,id:id}]));
        console.log([...passwordArray, {...form,id:id}]);
        }
        
        
        setForm({name: "", email: "", password: ""})
        setEdit(false)
    }


    function handleChange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleDelete(id){
        console.log("Deleting Data base on ID:", id);
        let conf = confirm("Are You Sure to Delete Your Data")
        if(conf){
            let newArray = passwordArray.filter(item => item.id !== id)
        setPasswordArray(newArray);
        localStorage.setItem("localData", JSON.stringify(newArray))
        }
    }

    function handleEdit(id){
        console.log("From handle Edit",id);
        let editObj = passwordArray.find(obj=>obj.id===id);
        setForm(editObj);
        console.log(editObj);
        setEdit(true)
    }


    function handleCopy(data) {
        navigator.clipboard.writeText(data);
        toast.success(`${data} Copied Successfully 👍`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition:Flip
            });
    }

    return (
        <>
            <ToastContainer
                position="topRight"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
            {/* Same as */}
            <ToastContainer />
            <section className="form_container">
                <section className='my-4'>
                    <label htmlFor='name' className='label_default'>
                        Name
                    </label>
                    <br />
                    <input
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
            </section>
            <section className="user_info">
                <header className="my-5 w-full mx-auto">
                    <h3 className="text-2xl italic font-semibold underline">User Info</h3>
                    {passwordArray.length === 0 && <small className="w-full h-full grid place-items-center text-5xl text-pink-600 font-semibold italic font-mono my-10">Nothing Added</small>}
                    {Array.isArray(passwordArray)&& passwordArray.length !== 0 && (<table className='table-auto w-full mx-auto my-5 '>
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-2">Name</th>
                                <th className="py-2">Email</th>
                                <th className="py-2">Password</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center bg-gray-950">

                            {passwordArray.map((data, index) => <Table key={index} data={data} handleCopy={handleCopy} onDelete={handleDelete} onEdit={handleEdit}/>)}
                        </tbody>
                    </table>)}
                </header>
            </section>
        </>
    );
}

export default Form;
