import './App.css';
import { Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'
import HomePage from './pages/Homepage'
import CategoriesPage from './pages/CategoriesPage'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AfterPaymentPage from './pages/AfterPaymentPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Provider store={store}>
      <div>

        <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/items/:id" element={<ItemPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/afterpayment' element={<AfterPaymentPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
