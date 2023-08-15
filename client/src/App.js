import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p>
      <Link to ="/"> Home Page </Link> |
        <Link to ="/products"> Dashboard </Link> |
        <Link to ="/products/new"> Create New Coffee </Link> 
      </p>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products" element={<DashboardPage/>} />
        <Route path="/products/new" element={<CreatePage/>} />
        <Route path="/products/:id" element={<DetailsPage/>} />
        <Route path="/products/:id/edit" element={<EditPage/>} />
      </Routes>
    </div>
  );
}

export default App;
