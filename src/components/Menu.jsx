import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
      <NavLink className='menu__item' to='/'>Посты</NavLink >
      <NavLink className='menu__item' to='/posts/{id}'>Карточка</NavLink>
      <NavLink className='menu__item' to='/posts/new'>Создать пост</NavLink>
      <NavLink className='menu__item' to='/post/edit/{id}'>Редактировать пост</NavLink>
    </div>
  );
}