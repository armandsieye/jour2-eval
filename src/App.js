import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Form } from './composants/Form';
import { Outlet } from 'react-router-dom';
import { Article } from './composants/ArticleList';

function App() {
 
  return (
    <div className='container'>
      <main className='row'>
       <Form />
       <Outlet />
      </main> 
    </div>
  );
}

export default App;
