let title = ['Nesciunt Mete','Eosle Commodi','Ledo Markt','Asperiores Commodit','Velit Doloremque','Dolori Architecto'];
let icon = ['https://cdn-icons-png.flaticon.com/128/8161/8161546.png','https://cdn-icons-png.flaticon.com/128/4081/4081186.png','https://cdn-icons-png.flaticon.com/128/3162/3162498.png','https://cdn-icons-png.flaticon.com/128/847/847488.png','https://cdn-icons-png.flaticon.com/128/17370/17370918.png','https://cdn-icons-png.flaticon.com/128/1380/1380338.png'];
let text = ['lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi','lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi','lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi','lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi','lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi','lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores Commodi'];
let cardList = document.getElementById("cardList");

for (let i = 0; i < title.length; i++) {
    cardList.innerHTML += `
        <div style="display: block; width: 80%;border-radius: 1px solid black;">
            <img src=${icon[i]} />
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    `    
}