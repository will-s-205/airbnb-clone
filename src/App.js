import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import Data from './data'

function App() {


  // console.log(Data); // DEBUGGING
  const cards = Data.map(item => {
    return <Card
      key={item.id} // to get rid of browser warnings
      img={item.coverImg}
      price={item.price}
      title={item.title}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
    />
  })
  // console.log(cards); // DEBUGGING

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
