import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Each from './components/EachPokemon/Each';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Event from './pages/Event';
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';
import './Sass/index.css'

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/each/:id" component={Each} />
          <Route path='/event' component={Event} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
