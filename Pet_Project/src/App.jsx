import WelcomeMessage from "./components/Welcome";
import FredDescription from "./components/Fred";
import FredImage from './assets/cute-puppy.jpg'


function App() {
  return ( 
    <>
    <WelcomeMessage
    title='Pet Project' 
    text='This is a project dedicated to showcasing beautiful animals.' 
    details='Please choose a pet from the list below:' 
  />

    <FredDescription 
    title='Fred' 
    image={FredImage}
    />
    </>
  );
}

export default App
