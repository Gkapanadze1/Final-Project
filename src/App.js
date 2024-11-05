import './App.css';
import { Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import HomePage from './pages/Homepage'
import CategoriesPage from './pages/CategoriesPage'
import ItemPage from './pages/ItemPage'

function App() {
  return (
    <Provider store={store}>
      <div>

        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
