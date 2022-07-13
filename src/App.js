import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Tarea hecha!"}/>
      <ItemDetailContainer />
    </div>
  );
}


export default App;
