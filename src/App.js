import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import Data from './data'
import Footer from './components/Footer';

function App() {


  // console.log(Data); // DEBUGGING
  const cards = Data.map(item => {
    return <Card
      key={item.id} // to get rid of browser warnings
      {...item}     // get all data from data.js
    />
  })
  // console.log(cards); // DEBUGGING

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  );
}

export default App;
