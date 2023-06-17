import './App.css';
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Card from '../src/components/Card'
import Data from './data'

function App() {


  console.log(Data);
  const cards = Data.map(item => {
    return <Card
      key={item.id} // to get rid of warnings
      img={item.coverImg}
      price={item.price}
      title={item.title}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
    />
  })
    console.log(cards);

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
