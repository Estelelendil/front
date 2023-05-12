import './App.css';
import { Route, Routes, useParams } from 'react-router';
import Menu from './components/Menu';
import Posts from './components/Posts';
import Create from './components/Create';
import Edit from './components/Edit';
// import Card from './components/Card';

function App() {
  let { id } = useParams();
  console.log('userId', id)
  return (
    <>
      <div className="page">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Posts />} />
          {/* <Route path={`/posts/:id`} element={<Card />} /> */}
          <Route path="/posts/new" element={<Create />} />
          <Route path={`/posts/edit/:id`} element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
