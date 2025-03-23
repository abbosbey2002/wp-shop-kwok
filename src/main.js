// Tailwind import
import './style.css'
import './index.css'


// Sections import
import HeroSection from './sections/HeroSection';
import ProductsGrid from './sections/ProductsGrid';

// Sahifamizni yig‘ish
const app = document.getElementById('app');

// Hero section ni qo‘shish
app.innerHTML += HeroSection();

// Products grid ni qo‘shish
app.innerHTML += ProductsGrid();
