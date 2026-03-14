let productlist = document.getElementById('productlist')
let cartList = document.getElementById('cartList')
let wishList = document.getElementById('wishList')
let count = document.getElementById('count')
let pricList = document.getElementById('pricList')
let sebet = []
let favoritler = []

function opencart() {
  let modal = document.getElementById('modal')

  modal.style.display = 'block'

  cartList.style.display = 'block'
  pricList.style.display = 'block'
  wishList.style.display = 'none'

  showBasket()
}

class Product {
  constructor(id, ad, qiymet, category, image) {
    this.id = id,
      this.name = ad,
      this.price = qiymet,
      this.category = category,
      this.image = image
  }
  showProduct() {
    return `
      <div id="${this.id}" class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
          <a href="javascript:void(0)" class="block">
            <div onclick="showProductDetail(${this.id})" class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
              <img src="${this.image}" alt="Product 1"
                class="w-full h-full object-contain" />
            </div>
  
            <div class="flex gap-2 mt-4">
              <h5 class="text-base font-semibold text-slate-900">${this.name}</h5>
              <h6 class="text-base text-slate-900 font-bold ml-auto">$${this.price}</h6>
            </div>
            <p class="text-slate-600 text-[13px] mt-2">${this.category}</p>
          </a>
          <div class="flex items-center gap-2 mt-6">
            <div onclick="favbasket(${this.id})" 
              class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>
            <button onclick="adbasket(${this.id})" type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Sebete at</button>
          </div>
        </div>
    `
  }
}

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

for (let i = 0; i < AllProduct.length; i++) {
  let data = AllProduct[i].showProduct()
  productlist.innerHTML += data
}


function adbasket(id) {
  let umumMehsul = sebet.find(item => item.id === id)
  if (umumMehsul) {
    umumMehsul.count += 1
  } else {
    sebet.push({ id: id, count: 1 })
  }
  count.innerHTML = sebet.length
  console.log(sebet);

  showBasket()

}

function showBasket() {
  cartList.innerHTML = "";
  let TotalPrice = 0;
  cartList.innerHTML = sebet.map((item, index) => {
    const prdct = AllProduct.find(e => e.id === item.id)
    TotalPrice += prdct.price * item.count
    return `
      <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
        <div class="col-span-2 flex items-center gap-6">
          <div class="w-20 h-20 shrink-0">
            <img src='${prdct.image}'
              class="w-full h-full object-contain" />
          </div>
          <div>
            <h3 class="text-[15px] font-semibold text-slate-900">${prdct.name}</h3>
            <h6 class="text-sm text-slate-500 mt-1">Color: <span class="ml-2 font-semibold">${prdct.category}</span>
            </h6>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button  type="button"
            class="flex items-center justify-center w-5 h-5 bg-gray-200 outline-none rounded-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-black" viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                data-original="#000000"></path>
            </svg>
          </button>
          <span class="text-sm font-bold">${item.count}</span>
          <button  type="button"
            class="flex items-center justify-center w-5 h-5 bg-gray-200 outline-none rounded-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-black" viewBox="0 0 42 42">
              <path
                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                data-original="#000000"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <h4 class="text-[15px] font-semibold text-slate-900">${(prdct.price * item.count)} $</h4>
          <svg onclick="removBasket(${item.id})" xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-red-500 ml-auto"
            viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </div>
      </div>
    `
  }).join("")

  pricList.innerHTML = `
    <li class="flex flex-wrap gap-4 text-sm py-3 font-bold text-blue-600">
        Total <span class="ml-auto">${TotalPrice} $</span>
    </li>
  `
}

function removBasket(item) {
  let index = sebet.findIndex(seb => seb.id === item.id);
  if (index !== -1) {
      sebet.splice(index, 1);
    }
    showBasket();
    count.innerHTML = sebet.length;
    sebet.length == 0 ? modal.style.display = 'none' : modal.style.display = 'block';
}



function showProductDetail(productId){
    window.location.href = `detailpage.htm?id=${productId}`;
}


function closeModal() {
  document.getElementById('modal').style.display = 'none'
}





function favbasket(id) {
  let yoxla = favoritler.find(item => item.id === id)

  if (!yoxla) {
    favoritler.push({ id: id })
  } else {
    favoritler = favoritler.filter(item => item.id !== id)
  }

  document.getElementById("wishCount").innerHTML = favoritler.length
  showFav()
}

function showFav() {
  wishList.innerHTML = ""

  wishList.innerHTML = favoritler.map(item => {
    const prdct = AllProduct.find(e => e.id === item.id)

    return `
      <div class="flex justify-between items-center border-b py-2">
        <h3 class="font-semibold">${prdct.name}</h3>
        <span class="text-sm text-gray-600">$${prdct.price}</span>
      </div>
    `
  }).join("")
}

function openWishlist() {
  let modal = document.getElementById('modal')

  modal.style.display = 'block'

  cartList.style.display = 'none'
  pricList.style.display = 'none'
  wishList.style.display = 'block'

  showFav()
}