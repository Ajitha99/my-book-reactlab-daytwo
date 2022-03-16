
import './App.css';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='stylediv'>
        <div className='divapp'><Book title = "Ten" image = "https://images-na.ssl-images-amazon.com/images/I/41FJC-yTM6L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" description = "A smart and terrifying teen horror novel inspired by Agatha Christie’s And Then There Were None, from Get Even author Gretchen McNeil—now a Lifetime Original Movie!" /></div>
        <div className='divapp'><Book title = "Life Without Limits" image = "https://images-na.ssl-images-amazon.com/images/I/51utIqP-JkL._SX323_BO1,204,203,200_.jpg" description = "Born without arms or legs, Nick Vujicic overcame his disabilities to live an independent, rich, fulfilling, and “ridiculously good” life while serving as a role model for anyone seeking true happiness. Now an internationally successful motivational speaker, Nick eagerly spreads his message: the most important goal is to find your life’s purpose and to never give up, despite whatever difficulties or seemingly impossible odds stand in your way."/></div>
        <div className='divapp'><Book title = "Zero to One" image = "https://fourminutebooks.com/wp-content/uploads/2016/06/best-motivational-books-29-678x1024.jpg" description = "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things." /> </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
