import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AdminRouter from './routes/AdminRouter';
import UserRouter from './routes/UserRouter';
import TeacherRouter from './routes/TeacherRouter';
import swal from 'sweetalert';
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>

      {/* User Router */}
      <UserRouter />

      
      {/* Teacher Router */}
      <TeacherRouter />

     

      {/* Admin Router */}
      <AdminRouter />
      <ToastContainer />

    </BrowserRouter>

  )
}

export default App
