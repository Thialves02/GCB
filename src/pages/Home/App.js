import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Introducao from '../../components/Introducao/Introducao';
import Membership from '../../components/Membership/Membership';
import Navbar from '../../components/Navbar/Navbar';
import Recipes from '../../components/Recipes/Recipes';
import Servicos from '../../components/Servicos/Servicos';
import './App.css';

function App() {
  return (
    <>
    <Introducao/>
    <Recipes/>
    <Servicos/>
    <Blog/>
    <Membership/>
    </>
  );
}

export default App;
