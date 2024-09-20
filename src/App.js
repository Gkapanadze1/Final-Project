import './App.css';
import { Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Provider store={store}>
      <div>
        
        <Homepage />

        <Routes>

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
