

function HeroSection() {
    return `
         <header class="relative z-10">
    <nav class="flex items-center justify-between px-4 py-3 md:px-8">
      <!-- Logo qismi -->
      <div class="flex items-center space-x-2">
        <!-- Logotip o‘rniga o‘z rasmingizni joylashtiring -->
        <img src="logo.png" alt="Arigonia Imperial" class="h-10 w-10 object-cover rounded-full" />
        <span class="hidden sm:inline-block font-bold text-xl uppercase tracking-wide">
          Arigonia Imperial
        </span>
      </div>

      <!-- Desktop menyu (md: hidden bo'lmaydi) -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="hover:text-gray-300">Главная</a>
        <a href="#" class="hover:text-gray-300">Чертежи</a>
        <a href="#" class="hover:text-gray-300">Комиксы</a>
        <a href="#" class="hover:text-gray-300">Игры</a>
        <a href="#" class="hover:text-gray-300">Кастом</a>
        <a href="#" class="hover:text-gray-300">Выйти</a>
      </div>

      <!-- Mobile menyu tugmasi -->
      <button
        class="md:hidden text-white focus:outline-none"
        onclick="toggleMenu()"
        aria-label="Toggle menu"
      >
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M4 5h16M4 12h16M4 19h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menyu (default: hidden) -->
    <div
      id="mobileMenu"
      class="hidden flex-col items-center space-y-2 px-4 pb-4 md:hidden"
    >
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Главная</a>
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Чертежи</a>
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Комиксы</a>
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Игры</a>
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Кастом</a>
      <a href="#" class="block w-full py-2 text-center hover:bg-gray-800">Выйти</a>
    </div>
  </header>
    `

}

export default HeroSection