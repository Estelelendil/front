import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({id}) {
    //get element by id from 'http://localhost:7070/{postId}        
    const [post, setPost] = useState([]);
//fetch post from api by id 
    useEffect(() => {   
        fetch(`http://localhost:7070/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    },[id])
       
    const deletePost = (id) => {
            fetch(`http://localhost:7070/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    console.log(post);
  
    return (
      <div>
        <h1>{`Posts ${id}`}</h1>
        <div>

                  {/* <NavLink to={`/posts/${post.id}`} key={post.id}> */}
                    <h2>{post.content}</h2>
                    <p>{post.created}</p>
                    <NavLink to='/' onClick={() => deletePost(post.id)}>Удалить</NavLink>
                    <NavLink to={`/posts/edit/${id}`}>Рудактировать</NavLink>
            </div>
      </div>
    );
    }