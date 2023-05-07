import { NavLink } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

export default function Edit(id) {

    //get element by id from 'http://localhost:7070/{postId}        
    const [post, setPost] = useState([]);
//fetch post from api by id 
    useEffect(() => {   
        fetch(`http://localhost:7070/${id}`)
        .then(res => res.json())
        .then(data => {setPost(data)});
    },[id])
       
  

    const [form, setForm]=useState({
        id: post.id,
        date: post.date,
        content: post.content,
    })
  
    const handleChange=(event)=>{
      const { name, value } = event.target;
      setForm((prevForm)=>({...prevForm,[name]:value}));
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      const newPost={
        id: new Date().getTime(),
        date: form.date,
        distance: parseFloat(form.distance) 
      };

      // POST на адрес http://localhost:7070/posts body: {form};
    
        fetch('http://localhost:7070/posts',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
              },

          body: JSON.stringify(newPost)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })}
    
  
    return (
      <div>
        <h1>{`Posts ${id}`}</h1>
        <div>
        <form  className='list_container'>
            <input type='date' name='date' value={form.date} onChange={handleChange}></input>
            <input type='text' name='content' value={form.distance} onChange={handleChange}></input>
            <button>ok</button>
          </form>
                    <NavLink to={`/posts/${post.id}`} onClick={() => handleSubmit}>Cохранить</NavLink>
                    <NavLink to='/'>X</NavLink>
            </div>
    <div>
    </div>
      </div>
    );
    }