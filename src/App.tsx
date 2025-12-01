import './App.css';
import { ListingCard } from './components/ListingCard';
import { NavBar } from './components/navbar-top/NavBar';
import { Provider } from './components/ui/provider';

export interface ListingQuery {
  id: number | null;
  soldSeperately: boolean | null;
  price: number | null;
}

function App() {
  return (
    <Provider>
      <NavBar />
      <ListingCard></ListingCard>
    </Provider>
    
  );
};

export default App;
