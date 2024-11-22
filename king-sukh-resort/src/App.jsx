import Nav from "./Components/Nav";
import Font from './Font';
import About from './Components/About'; 
import Rooms from './Components/Rooms';
import Services from "./Components/Services";
import Review from "./Components/Review";
import Gallery from "./Components/Gallery";
import Form from "./Components/Form";

const App = () => {
 
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        </div>
      <Font/>
      <About />
      <Rooms />
      <Services />
      <Review />
      <Gallery />
      <Form/>
      

    </>
 
  );
  
};

export default App
