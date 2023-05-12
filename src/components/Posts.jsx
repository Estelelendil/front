import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
// import { NavLink } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log('posts',posts);

  // const renderPosts = () => {
    return posts.map((post) => {
      return (
        <Link to={`/posts/edit/${post.id}`} key={post.id}>
          <Card id={post.id}></Card>
        
        </Link>
      );
    });
  };

  // return (
  //   <div>
  //     <h1>Posts</h1>
  //     {renderPosts()}
  //   </div>
  // );
  // }
