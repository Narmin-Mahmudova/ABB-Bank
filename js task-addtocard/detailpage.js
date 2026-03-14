let productlist = document.getElementById('productlist')


class Product {
  constructor(id, ad, qiymet, category, image) {
    this.id = id,
      this.name = ad,
      this.price = qiymet,
      this.category = category,
      this.image = image
  }
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let AllProduct = [
  new Product(
    1,
    "iPhone15Pro",
    1200,
    "Elektronika",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy5X1TPQXIpLT0GL5SKrYJyfbAqLWLc9gdA&s"
  ),
  new Product(
    2,
    "MacBook Air M2",
    1100,
    "Elektronika",
    "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg"
  ),
  new Product(
    3,
    "Sony WH-1000XM5",
    350,
    "Elektronika",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj945lSho7ftDW1ChmWMwPOVTaBVLRjjqNNQ&s"
  ),
  new Product(
    4,
    "Samsung Galaxy S24 Ultra",
    1300,
    "Elektronika",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWX6hAGK6K6h71L6ceRyanaNzB64Wy6uo24LA&s"
  ),
  new Product(
    5,
    "PlayStation 5",
    500,
    "Elektronika",
    "https://storage.irshad.az/products/resized/zmxX8pXq8PansiMuKCX3D87sKTILnx7Q9YdL7l14.png"
  ),
  new Product(
    6,
    "Nintendo Switch OLED",
    350,
    "Elektronika",
    "https://strgimgr.b-cdn.net/sized/840/426066-dec14b457566f31d136142e9a6daab47.jpg?width=384&height=384&quality=90"
  ),
  new Product(
    7,
    "Dell XPS 13",
    950,
    "Elektronika",
    "https://compstore.az/uploads/2021/10/dell_xps_13_9305_1.webp"
  ),
  new Product(
    8,
    "iPad Pro M2",
    850,
    "Elektronika",
    "https://bystore.az/public/uploads/images/12-11-2022/636f97540f5b8.png"
  ),
  new Product(
    9,
    "GoPro HERO12",
    400,
    "Elektronika",
    "https://strgimgr.b-cdn.net/sized/840/954498-6b6b9a6dd202ccbf3e98bc0c9ff0426d.jpg?width=384&height=384&quality=90"
  ),
  new Product(
    10,
    "Logitech MX Master 3S",
    100,
    "Elektronika",
    "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg"
  )
];

const selectedProduct = AllProduct.find(item => item.id == productId)

if (selectedProduct) {
    productDetail.innerHTML = `
    
    <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
                <div class="w-full lg:sticky top-0">
                    <div class="flex flex-col gap-4">
                        <div class="bg-white shadow-sm p-2">
                            <img src="${selectedProduct.image}" alt="Product"
                                class="w-[40%]  object-cover object-top" />
                        </div>

                    </div>
                </div>

                <div class="w-full">
                    <div>
                        <h3 class="text-lg sm:text-xl font-semibold text-slate-900">${selectedProduct.name}</h3>


                        <div class="flex items-center flex-wrap gap-2 mt-6">
                            <p class="text-slate-500 text-base"><strike>$${selectedProduct.price}</strike></p>
                    
                            <div class="flex py-1 px-2 bg-purple-600 font-semibold !ml-4">
                                <span class="text-white text-sm">${selectedProduct.category}</span>
                            </div>
                        </div>

                        <div>
                            <h4 class="text-base mt-4 text-slate-500 font-semibold">Net Wt: 100G</h4>
                        </div>
                    </div>


                </div>
            </div>
    
    
    `
} else {
    productDetail.innerHTML = `
<section class="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-40 h-40 dark:text-gray-400">
			<path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
			<rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
			<polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
			<polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
		</svg>
		<p class="text-3xl">Looks like our services are currently offline</p>
		<a rel="noopener noreferrer" href="#" class="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</a>
	</div>
</section>
    `
}