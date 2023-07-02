import Header from './components/Header'
import Footer from './components/Footer'
import Apropos from './components/Apropos';
import Qualites from './components/Qualites';
import Competences from './components/Competences';
import './css/App.css';

function App() {
  return (
    <div className="app">

      <Header />
      <Apropos />
      <Qualites />
      <Competences />
      <Footer />



    </ div>
  );
}

export default App;
