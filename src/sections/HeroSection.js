
import bannerImage from '../assets/images/banner.svg';
export default function HeroSection() {
  return `
      <section class="w-full bg-gray-100 py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <!-- Matn qismi (chap tomonda) -->
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              ZEFIR Collection
            </h1>
            <p class="text-gray-600 text-lg mb-6">
              Bizning yangi kolleksiyamiz bilan tanishing. U zamonaviy, qulay va yuqori sifatli.
            </p>
            <button 
              class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              onclick="alert('Batafsil ma’lumotni shu yerda ko‘rsatish mumkin!')"
            >
              Подробнее
            </button>
          </div>
          <!-- Rasm qismi (o‘ng tomonda) -->
          <div class="md:w-1/2 flex justify-center">
            <img 
              src="${bannerImage}" 
              alt="ZEFIR Collection Hero" 
              class="rounded-md shadow-md object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>
    `;
}
