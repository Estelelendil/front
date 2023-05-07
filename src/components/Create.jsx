
    import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Create() {
    // saves the post and displays the view card with the updated data. POST to http://localhost:7070/posts body: {"id": not 0, "content": "What is entered in the input field"}
    
    // function dateSorter({date: a}, {date: b}) {
    //   const c = new Date(a);
    //   const d = new Date(b);
    //   return c - d;
    // }
    
    //   const [trains, setTrains]=useState([])
      const [form, setForm]=useState({
          id: '',
          date: 0,
          content: '',
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
        })
    }


    
        // const index=trains.findIndex((item) => 
        //   new Date(item.date).getTime() === new Date(form.date).getTime()
        // );
    
    //     if (index !== -1) {
    //       setTrains((prevTrains)=>{
    //         const head = prevTrains.slice(0, index);
    //         const tail = prevTrains.slice(index + 1);
    //         const oldElement = prevTrains[index];
    //         const newElement = { ...oldElement, distance: newTrain.distance + oldElement.distance };
    
    //         const newTrains = [...head, newElement, ...tail];
    //         return newTrains.sort(dateSorter);
    //       });
    //     } else {
    //       setTrains((prevTrains)=>[...prevTrains, newTrain].sort(dateSorter));
    //     }
    //   }
    
    //   const handleRemove=(train)=>{
    //     setTrains((prevTrains)=>prevTrains.filter(t=>t.id!==train))
    //   }
    
      return (
        <div>
          <form onSubmit={handleSubmit} className='list_container'>
            <input type='date' name='date' value={form.date} onChange={handleChange}></input>
            <input type='text' name='content' value={form.distance} onChange={handleChange}></input>
            <button>ok</button>
          </form>
          <button type='submit' >Опубликовать</button>
          <NavLink to='/'>X</NavLink>
          {/* <List items={trains} remove={handleRemove}/> */}
        </div>
      );
    }

