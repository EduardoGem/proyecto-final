import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/Homepage';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';
import RegisterPDC from './pages/RegisterPDC';
import AsignarCE from './pages/AsignarCE';
import { RegmatProvider } from './context/regmatContext';
import { AsiganarcurProvider } from './context/asignarcurContext';
import { AsignarcdProvider } from './context/asignarcdContext';
import AsignarCD from './pages/AsignarCD';
import Tomarlista from './pages/Tomarlista';
import { TomarListaProvider } from './context/tomarlistaContext';




function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <RegmatProvider>
          <AsiganarcurProvider>
            <AsignarcdProvider>
              <TomarListaProvider>
                <BrowserRouter>
                  <main className=''>
                    <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/login' element={<LoginPage />} />
                      <Route path='/registerpdc' element={<RegisterPDC />} />
                      <Route path='/register' element={<RegisterPage />} />
                      <Route path='/asignarce' element={<AsignarCE />} />
                      <Route path='/asignardoc' element={<AsignarCD />} />
                      <Route path='/listaes' element={<Tomarlista />} />


                      <Route element={<ProtectedRoute />}>

                        <Route path='/tasks' element={<TasksPage />} />
                        <Route path='/add-task' element={<TaskFormPage />} />
                        <Route path='/tasks/:id' element={<TaskFormPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                      </Route>
                    </Routes>
                  </main>
                </BrowserRouter>
              </TomarListaProvider>
            </AsignarcdProvider>
          </AsiganarcurProvider>
        </RegmatProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App 