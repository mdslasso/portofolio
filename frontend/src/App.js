import Header from './components/Header'
import Footer from './components/Footer'
import Apropos from './components/Apropos';
import Qualites from './components/Qualites';
import Contact from './components/Contact';
import Competences from './components/Competences';
import Realisations from './components/Realisations';
import './css/App.css';

function App() {
  return (
    <div className="app">

      <Header />
      <Apropos />
      <Qualites />
      <Competences />
      <Realisations />
      <Contact />
      <Footer />



    </ div>
  );
}

export default App;
