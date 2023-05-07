import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7070/posts.')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <NavLink to={`/posts/${post.id}`} key={post.id}>
          <h2>{post.content}</h2>
          <p>{post.created}</p>
        </NavLink>
      );
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      {renderPosts()}
    </div>
  );
  }
