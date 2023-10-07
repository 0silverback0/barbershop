
import './App.css';
import Booking from './Booking';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ImageGallery />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
