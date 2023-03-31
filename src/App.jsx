import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path={'/*'} element={<UserRouter />} />
      </Routes>

      {/* Teacher Router */}
      <Routes>
        <Route path={'/teacher/*'} element={<TeacherRouter />} />
      </Routes>

      {/* Admin Router */}
      <Routes>
        <Route path={'/admin/*'} element={<AdminRouter />} />
      </Routes>

      <ToastContainer />

    </BrowserRouter>

  )
}

export default App
