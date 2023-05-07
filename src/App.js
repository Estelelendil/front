import './App.css';
import { Route, Routes } from 'react-router';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Card from './components/Card';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  const id = 3;
  return (
    <>
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Posts />} />
          <Route path='/posts/{id}' element={<Card id={id} />} />
          <Route path="/posts/new" element={<Create />} />
          <Route path="/post/edit/{id}" element={<Edit id={id} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
