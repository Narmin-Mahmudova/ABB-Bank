let mealList = document.getElementById("mealList");

class Meal{
    constructor(ad, melumat, qiymet, img){
        this.name = ad;
        this.info = melumat;
        this.price = qiymet;
        this.image = img;
    }
}

let AllMeal = [
    new Meal("Delicious Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 20, "img/Pizza_(1).jpg"),
    new Meal("Delicious Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 15, "img/burger.jpg"),
    new Meal("Delicious Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 17, "img/Pizza_(1).jpg"),
    new Meal("Delicious Pasta", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 18, "img/pasta.jpg"),
    new Meal("Delicious Fries", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 10, "img/fries.jpg"),
    new Meal("Delicious Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 15, "img/Pizza_(1).jpg"),
    new Meal("Tasty Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 22, "img/burger.jpg"),
    new Meal("Tasty Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 16, "img/burger.jpg"),
    new Meal("Delicious Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 10,  "img/Pizza_(1).jpg" ),
];

for (const data of AllMeal) {
    mealList.innerHTML += `
    <div class="bg-slate-800 text-white overflow-hidden">
            <div class="bg-gray-50 aspect-[22/13]">
              <img src="${data.image}" alt="" class="w-full h-full object-cover" />
            </div>
            <div class="px-4 mt-6">
              <h3 class="text-lg font-semibold mb-3">${data.name}</h3>
              <p class="text-[15px] leading-relaxed line-clamp-2">${data.info}</p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
              <p class="text-sm font-semibold mt-3 mb-8">$${data.price}</p>
              <i style="color:white; background-color: orange; padding: 23px; width: 10px; height: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center;" class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
    `
}