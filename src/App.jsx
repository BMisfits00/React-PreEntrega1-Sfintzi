import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavComponente from './components/NavComponente'

function App() {

  return (
    <>
    <NavComponente/>
    <ItemListContainer greeting={'Todo el hardware que necesitabas, master'}/>
    </>
  )
}

export default App