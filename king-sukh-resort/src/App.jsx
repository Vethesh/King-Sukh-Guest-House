import Nav from "./Components/Nav";
import Font from './Font';
import About from './Components/About'; 
import Rooms from './Components/Rooms';
import Services from "./Components/Services";
import Review from "./Components/Review";
import Gallery from "./Components/Gallery";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const App = () => {
 
  return (
    <>
      <Nav />
      {/* <Font/> */}
      <About />
      <Rooms />
      <Services />
      <Review />
      <Gallery />
      <Form />
      <Footer/>

    </>
 
  );
  
};

export default App
