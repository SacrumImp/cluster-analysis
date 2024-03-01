import './App.scss';
import { Home } from './pages';
import { rootStore, StoreContext } from './stores/StoreContext';

function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <div className="App">
        <Home/>
      </div>
    </StoreContext.Provider>
  )
}

export default App;
