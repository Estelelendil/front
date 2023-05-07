import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div className='menu'>
      <NavLink className='menu__item' to='/'>Home</NavLink >
      <NavLink className='menu__item' to='/drift'>Drift</NavLink>
      <NavLink className='menu__item' to='/timeattack'>Time Attack</NavLink>
      <NavLink className='menu__item' to='/forza'>Forza</NavLink>
    </div>
  );
}