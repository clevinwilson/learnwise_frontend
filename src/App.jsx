import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AdminRouter from './routes/AdminRouter';
import UserRouter from './routes/UserRouter';
import TeacherRouter from './routes/TeacherRouter';
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Router */}
        <Route path={'/*'} element={<UserRouter />} />

        {/* Teacher Router */}
        <Route path={'/teacher/*'} element={<TeacherRouter />} />

        {/* Admin Router */}
        <Route path={'/admin/*'} element={<AdminRouter />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
