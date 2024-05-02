import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import CryptoView from './pages/CryptoView'
import { useCryptoContext } from './context/CryptoContext'
import ErrorPage from './pages/Error'
function App() {
  const { error } = useCryptoContext();

  return (
    <>
      {error ?
        <ErrorPage></ErrorPage> :
        <>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cryptoview/:id' element={<CryptoView></CryptoView>}></Route>
          </Routes>
        </>
      }

    </>
  )
}

export default App
