// Tailwind import
import './style.css'
import './index.css'


// Sections import
import HeroSection from './sections/HeroSection';


// Sahifamizni yig‘ish
const app = document.getElementById('app');

// Hero section ni qo‘shish
app.innerHTML += HeroSection();
