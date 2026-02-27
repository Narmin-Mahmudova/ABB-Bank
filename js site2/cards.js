const fruitNames = [
  "Apple", "Pear", "Plum", "Banana", "Strawberry", "Tangerine", 
  "Kiwi", "Grape", "Watermelon", "Blackberry", "Pomegranate", "Date", 
  "Peach", "Pineapple", "Mandarin","Mandarin"
];

const releaseDates = [
  "2023-01-01", "2023-02-15", "2023-03-20", "2023-04-10", 
  "2023-05-05", "2023-06-12", "2023-07-01", "2023-08-20", 
  "2023-09-15", "2023-10-10", "2023-11-05", "2023-12-01", 
  "2023-06-15", "2023-07-25", "2023-08-30", "2023-05-08"
];

const prices = [
  1.5, 2.0, 2.5, 1.0, 3.0, 1.2, 2.8, 3.5, 0.8, 4.5, 
  2.3, 3.0, 2.5, 3.8, 2.7, 2.6
];

const descriptions = [
  "A sweet and crispy fruit often used in pies and juices.",
  "A juicy fruit with a sweet and slightly tart flavor, often eaten fresh or in salads.",
  "A small, round fruit with a tart flavor, great for jams and pies.",
  "A tropical fruit with a sweet taste, commonly eaten as a snack.",
  "A delicious red or green berry, perfect for desserts and smoothies.",
  "A small citrus fruit known for its sweet and tangy taste.",
  "A fuzzy fruit with a unique, sweet-tart taste, full of vitamins.",
  "Small, juicy fruit, typically purple or green, great for snacking or wine production.",
  "A large, hydrating fruit with a sweet flavor, perfect for summer.",
  "A dark purple or black fruit, great for smoothies, jams, and desserts.",
  "A rich, ruby-red fruit with a sweet and tart flavor, often used in juices.",
  "A sweet, chewy fruit that can be eaten dried or fresh.",
  "A juicy and aromatic fruit, perfect for smoothies or fresh eating.",
  "A tropical fruit with a tangy and sweet flavor, often used in fruit salads.",
  "A citrus fruit known for its tangy flavor, often used in juices.",
  "A citrus fruit known for its tangy flavor, often used in juices."
];



let cards = document.getElementById("Cards2")

let html = ''
for (let i = 0; i < fruitNames.length; i++) {
    html += `
        <div style="padding: 0 12px;margin: 24px 0 0;">
                        <div id="card2" style="width: 261px;border: 1px solid orange;border-radius: 10px;overflow: hidden;">
                            <div style="position: relative;width: 261px;height: 182px;overflow: hidden;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNmtiKe1ts_QSG_scLRR7f46Q7Jha-zPvJw&s" style="width: 100%;height: 200px;object-fit: cover;display: block;">
                                <div style="position: absolute;top: 12px; left: 12px; background: orange;color: white;padding: 6px 14px;border-radius: 10px;font-size: 14px;">
                                    Fruits
                                </div>
                            </div>
                            <div style="padding: 1.5rem;">
                                <h2 style="text-align: center;color: #45595B;font-size: 24px;">${fruitNames[i]}</h2>
                                <p style="color: #747D88;text-align: center; font-size: 16px;">${descriptions[i]}</p>
                                <p style="font-size: 20px;color: #45595B;">${prices[i]} $ / kg</p>
                                <a href="#" style="color: #81c408;margin: 10px 0; padding: 8px 16px;border: 1px solid orange; border-radius: 20px;text-decoration: none;"><i class="fa-solid fa-basket-shopping"></i>Add to cart</a>
                            </div>
                        </div>
                    </div>
    `
    
}

cards.innerHTML = html

function axtar(){
    let input = document.getElementById('search').value.toLowerCase()
    let container = document.getElementById('Cards2')
    let cards = container.getElementsByClassName('card2')

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase()

        if(text.indexOf(input) !== -1){
            cards[i].style.display = "block"
        }else{
            cards[i].style.display = "none"
        }
        
    }
}