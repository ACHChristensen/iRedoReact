import './App.css';
import { NavBar } from './components/navbar-top/NavBar';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
       <NavBar />
    </Provider>
    
  );
};

export default App;
