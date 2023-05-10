import './App.css';
import { Route, Routes, useParams } from 'react-router';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Card from './components/Card';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  let { userId } = useParams();
  return (
    <>
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Posts />} />
          <Route path='/posts/{userId}' element={<Card id={userId} />} />
          <Route path="/posts/new" element={<Create />} />
          <Route path="/post/edit/{userId}" element={<Edit id={userId} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
