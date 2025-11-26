import './App.css';
import { Listing } from './components/listing';
import { NavBar } from './components/navbar-top/NavBar';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <NavBar />
      <Listing></Listing>
    </Provider>
    
  );
};

export default App;
