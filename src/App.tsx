import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormComponent from './components/form.component'
import GridComponent from './components/grid.component'
import NotFound from './components/NotFound'
import Login from './components/Login.component'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <FormComponent></FormComponent>
            <GridComponent></GridComponent>
          </>
        } />
        <Route path='/login' element={ <Login></Login> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </>
  )
}

export default App
