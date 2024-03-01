
const cart=document.getElementById("cartList");
const totalPrice=document.getElementById("totalPrice");
const cardTarget=document.getElementById("cardContainer");
const cartTarget=document.getElementById("cartList");



const ourCortes=[
    {
        id: 1,
        flavor:"tira de asado",
        price: "7.500",
        img:"./images/asado.jfif",
        btn:"btn-1"

    },
    {
        id: 2,
        flavor:"hamburguesa completa",
        price: "5.199",
        img:"./images/hamburguesa.jpg",
        btn:"btn-2"

    },
    {
        id: 3,
        flavor:"parrillada completa",
        price: "12.699",
        img:"./images/parrillada completa.avif",
        btn:"btn-3"

    },
    {
        id: 4,
        flavor:"pata muslo con guarnicion",
        price: "5.099",
        img:"./images/patamuslo.jpg",
        btn:"btn-4"

    },
    {
        id: 5,
        flavor:"bife con fritas",
        price: "6.532",
        img:"./images/plato-carne-parrilla-papas-fritas-mesa-madera_318269-198.jpg",
        btn:"btn-5"

    },
    {
        id: 6,
        flavor:"Poll a la plancha",
        price: "4.395",
        img:"./images/pollo a la plancha.webp",
        btn:"btn-6"

    }
];

function createCards(){
for (const corte of ourCortes) {
    cardTarget.innerHTML += `<div class="card" id=card-${corte.id}>
    <div class="img_container">
        <img src="${corte.img}" alt="" class="card_img">
    </div>
    <div class="card_text">
        <p class="card__price cortePrice">$${corte.price}</p>
        <h3 class="card__h3 product_name asado">${corte.flavor}</h3>
        <button class="card__btn" id="${corte.btn}" onclick="saveCorte('${corte.flavor}', '${corte.price}')">Agregar</button>
    </div>
</div>`
}
}

document.addEventListener("DOMContentLoaded", createCards);


var addedCortes;

function createCart(){
    if(localStorage.getItem('AddedPizzas')){
        cartTarget.innerHTML ="";
        addedCortes= JSON.parse(localStorage.getItem('AddedCortes'));
        let total=0;
        for (let i = 0; i < addedCortes.length; i++) {
            let corte= addedCortes[i]  
            cartTarget.innerHTML +=`<div class= "eachCorte>
            <button class="cart_btn" onClick="deleteCorte(${i})">x</button>
            <p class="cart_name cart_flavour">${Corte.flavor}</p>
            <p class="cart_price cart_price">$ ${Corte.price}</p>
            </div>`;
            total+=parseInt(corte.price);
            totalPrice.innerText=total;
        }
    }
}

function saveCorte(flavor, price){
    const corte = {
        flavor: flavor,
        price: price,
    };
    if (localStorage.getItem('AddedCortes')) {
        addedCortes = JSON.parse(localStorage.getItem('AddedCortes'));
    } else {
        addedCortes= [];
    }
    addedCortes.push(corte);
    localStorage.setItem('AddedCortes', JSON.stringify(addedCortes));

    alert("Corte agregado");
    createCart();
}

const cartBtn = document.getElementsByClassName("cart_btn")

function deleteCorte(index){
    addedCortes= JSON.parse(localStorage.getItem('AddedCortes'));
    addedCortes.splice(index, 1);
    localStorage.setItem('AddedCortes', JSON.stringify(addedCortes));
    if (index==0){
        totalPrice.innerText="";
    }
    createCart();
}



