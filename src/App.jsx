import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AdminRouter from './routes/AdminRouter';
import UserRouter from './routes/UserRouter';
import TeacherRouter from './routes/TeacherRouter';

function App() {
  return (
    <BrowserRouter>

      {/* User Router */}
      <UserRouter />

      
      {/* Teacher Router */}
      <TeacherRouter />

     

      {/* Admin Router */}
      <AdminRouter />

    </BrowserRouter>

  )
}

export default App
