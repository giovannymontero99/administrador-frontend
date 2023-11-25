import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import NotFound from './components/NotFound'
import Login from './components/Login.component'

//import FormComponent from './components/form.component'
import { Suspense, lazy } from 'react'

const PrivateRoute = lazy(() => import('./components/PrivateRoute/PrivateRoute'))


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path='*' element={<NotFound />} />
        <Route
          path='/'
          element={
              < Suspense fallback={null} >
                <PrivateRoute />
              </Suspense>
          } />
      </Routes>

      </QueryClientProvider>
  )
}

export default App
