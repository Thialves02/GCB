import Introducao from '../components/Introducao/Introducao';
import Navbar from '../components/Navbar/Navbar';
import Recipes from '../components/Recipes/Recipes';
import Servicos from '../components/Servicos/Servicos';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Introducao/>
    <Recipes/>
    <Servicos/>
    </>
  );
}

export default App;
