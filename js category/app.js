let productlist = document.getElementById('productlist')
let cartList = document.getElementById('cartList')
let wishList = document.getElementById('wishList')
let count = document.getElementById('count')
let pricList = document.getElementById('pricList')
let categoryList = document.getElementById('categoryList')


let sebet = []
let favoritler = []
let products = []
let data = []


function getCategory(){
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            let arr = []
            res.map(res => {
                if(!arr.includes(res.category)){
                    arr.push(res.category)
                    categoryList.innerHTML += `<li onclick="filtr(\`${res.category}\`)" class="bg-[yellow] p-2 rounded-xl text-[#f171f5] text-md">${res.category}</li>`
                }
            })
        })
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(getData => {
        data = getData
        getDataRender(data)
    })
getCategory()

function getDataRender(data) {
    productlist.innerHTML = data.map(res =>
        `
                <div id="${res.id}" class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
                    <a href="javascript:void(0)" class="block">
                        <div onclick="showProductDetail(${res.id})" class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                        <img src="${res.image}" alt="Product 1"
                            class="w-full h-full object-contain" />
                        </div>
            
                        <div class="flex gap-2 mt-4">
                        <h5 class="text-base font-semibold text-slate-900">${res.title}</h5>
                        <h6 class="text-base text-slate-900 font-bold ml-auto">$${res.price}</h6>
                        </div>
                        <p class="text-slate-600 text-[13px] mt-2">${res.category}</p>
                    </a>
                    <div class="flex items-center gap-2 mt-6">
                        <div onclick="favbasket(${res.id})" 
                        class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                            <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                        </svg>
                        </div>
                        <button onclick="adbasket(${res.id})" type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Sebete at</button>
                    </div>
                    </div>
                   `
    ).join('')
}


function filtr(name) {
    const netice = (name === 'all') ? data : data.filter(f => f.category === name)
    getDataRender(netice)

}

function opencart() {
    let modal = document.getElementById('modal')
    modal.style.display = 'block'
    cartList.style.display = 'block'
    pricList.style.display = 'block'
    wishList.style.display = 'none'

    showBasket()
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data
        data.map(item => {
            productlist.innerHTML += `
                <div id="${item.id}" class="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
                    <a href="javascript:void(0)" class="block">
                        <div onclick="showProductDetail(${item.id})" class="aspect-[12/11] bg-gray-100 rounded-lg p-4">
                        <img src="${item.image}" alt="Product 1"
                            class="w-full h-full object-contain" />
                        </div>
            
                        <div class="flex gap-2 mt-4">
                        <h5 class="text-base font-semibold text-slate-900">${item.title}</h5>
                        <h6 class="text-base text-slate-900 font-bold ml-auto">$${item.price}</h6>
                        </div>
                        <p class="text-slate-600 text-[13px] mt-2">${item.category}</p>
                    </a>
                    <div class="flex items-center gap-2 mt-6">
                        <div onclick="favbasket(${item.id})" 
                        class="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
                            <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                        </svg>
                        </div>
                        <button onclick="adbasket(${item.id})" type="button" class="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Sebete at</button>
                    </div>
                    </div>
                   `
        })
    })


function adbasket(id) {
    let umumMehsul = sebet.find(item => item.id === id)
    if (umumMehsul) {
        umumMehsul.count += 1
    } else {
        sebet.push({ id: id, count: 1 })
    }
    count.innerHTML = sebet.length
    showBasket()
}

function showBasket() {
    cartList.innerHTML = ""
    let TotalPrice = 0
    cartList.innerHTML = sebet.map(item => {
        const prdct = products.find(e => e.id === item.id)
        TotalPrice += prdct.price * item.count
        return `
        <div class="grid md:grid-cols-4 items-center md:gap-4 gap-6 py-4">
        <div class="col-span-2 flex items-center gap-6">
            <div class="w-20 h-20 shrink-0">
            <img src='${prdct.image}' class="w-full h-full object-contain"/>
            </div>
            <div>
            <h3 class="text-[15px] font-semibold">${prdct.title}</h3>
            <h6 class="text-sm text-slate-500 mt-1">${prdct.category}</h6>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button onclick="decrease(${item.id})" class="px-2 bg-gray-200">-</button>
            <span class="text-sm font-bold">${item.count}</span>
            <button onclick="increase(${item.id})" class="px-2 bg-gray-200">+</button>
        </div>
        <div class="flex items-center">
            <h4 class="text-[15px] font-semibold">
            ${prdct.price * item.count} $
            </h4>
            <button onclick="removBasket(${item.id})"
            class="ml-auto text-red-500">
            ✖
            </button>
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

function removBasket(id) {
    sebet = sebet.filter(item => item.id !== id)
    showBasket()
    count.innerHTML = sebet.length
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

function increase(id){
    let product = sebet.find(item => item.id === id)
    product.count++

    showBasket()
}

function decrease(id){
    let product = sebet.find(item => item.id === id)

    if(product.count > 1){
        product.count--
    }else{
        sebet = sebet.filter(item => item.id !== id)
    }
    
    count.innerHTML = sebet.length  
    if(sebet.length === 0){
        closeModal()
    }

    showBasket()
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
        const prdct = products.find(e => e.id === item.id)
        return `
        <div class="flex justify-between items-center border-b py-2">
        <h3 class="font-semibold">${prdct.title}</h3>
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