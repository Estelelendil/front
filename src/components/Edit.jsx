import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

export default function Edit() {
// const {userId}= useParams();
const { id } = useParams();
console.log('id', id)
const navigate=useNavigate()
const goBack=()=>navigate(`/posts/edit/${id}`)
// console.log('userId', userId)
    //get element by id from 'http://localhost:7070/{postId}        
    // const [post, setPost] = useState({});
//fetch post from api by id 
    useEffect(() => {   
        fetch(`http://localhost:7070/posts/${id}`)
        .then(res => res.json())
        // .then(data => {setPost({...data})});
        .then(data=>{setForm({id:data.post.id,
          date:data.post.date,
          content:data.post.content
        })})
    },[id])
       
  
    const [form, setForm]=useState({})
// useEffect(()=>{
//   console.log('post',post.post)
//   setForm({
//     id: post.id,
//     date: post.date,
//     content: post.content,
// })
// },[post])

  
    const handleChange=(event)=>{
      const { name, value } = event.target;
      setForm((prevForm)=>({...prevForm,[name]:value}));
      console.log('change', form)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      const newPost={
        id: form.id,
        // date: form.date,
        content: parseFloat(form.content) 
      };
      console.log('form', newPost)

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
        <form  onSubmit={handleSubmit} className='list_container'>
            <input type='date' name='date' value={form.date} onChange={handleChange}></input>
            <input type='text' name='content' value={form.content} onChange={handleChange}></input>
            <div>
            <button onClick={goBack} type='submit'>Сохранить</button>
            <NavLink to='/'>X</NavLink>
            </div>
          </form>
            </div>
    <div>
    </div>
      </div>
    );
    }