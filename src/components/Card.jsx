import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({id}) {
    //get element by id from 'http://localhost:7070/{postId}    
    console.log('card', id)    
    const [post, setPost] = useState({
      id: '',
      date: 0,
      content: '',
    });
//fetch post from api by id 
    useEffect(() => {   
        fetch(`http://localhost:7070/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[id])
       console.log(`post`,post)
    const deletePost = (id) => {
            fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    console.log(post);
  
    return (
      // <NavLink to={`/post/edit/${id}`} className='border-1 border-gray bg-gray' >
      <div>
        <h1>{`Posts ${id}`}</h1>
        <div>

                  {/* <NavLink to={`/posts/${post.id}`} key={post.id}> */}
                    <h2>{post.content}</h2>
                    <p>{post.created}</p>
                    <div className='flex gap-[15px]'>
                    <NavLink to='/' onClick={() => deletePost(id)} className='bg-red'>Удалить</NavLink>

                    <NavLink to={`/posts/edit/${id}`} onClick={()=> console.log('edit')}>Рeдактировать</NavLink>
                    </div>
            </div>
            </div>
      // </NavLink>
    );
    }