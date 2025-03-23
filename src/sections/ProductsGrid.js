import itemImge from '../assets/images/product-item.svg';

/**
 * Array of product objects.
 */
const products = [
  {
    id: 1,
    image: itemImge,
    alt: "Платье бежевое велюровое длинное",
    title: "Платье бежевое велюровое длинное",
    price: "320 BYN",
    // You can add a custom function name or inline code for the onClick event.
    onClick: "console.log('Mahsulot savatga qo‘shildi!')"
  },
  {
    id: 2,
    image: itemImge,
    alt: "Платье черное велюровое длинное",
    title: "Платье черное велюровое длинное",
    price: "1,230 BYN"
  },
  {
    id: 3,
    image: itemImge,
    alt: "Платье черное велюровое длинное",
    title: "Платье черное велюровое длинное",
    price: "1,299 BYN"
  }
];

/**
 * Returns the HTML for the products grid.
 *
 * @returns {string} The HTML string for the product grid.
 */
export default function ProductsGrid() {
  const productCards = products
    .map(product => {
      return `
        <div class="border p-4 rounded-md shadow flex flex-col items-center">
          <img 
            src="${product.image}" 
            alt="${product.alt}" 
            class="mb-4 w-full h-auto object-cover" 
          />
          <h3 class="text-lg font-semibold mb-2">
            ${product.title}
          </h3>
          <p class="text-gray-700 mb-2">
            ${product.price}
          </p>
          <button 
            class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            ${product.onClick ? `onclick="${product.onClick}"` : ""}
          >
            Купить
          </button>
        </div>
      `;
    })
    .join(''); // join the array of strings into one HTML string

  return `
    <section class="py-12 md:py-20">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
          ZEFIR Collection
        </h2>
        
        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          ${productCards}
        </div>
      </div>
    </section>
  `;
}
