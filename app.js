const container = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");
const cardRow = document.querySelectorAll(".cart-row item");

const creatHtml = (ItemName,ItemPrice,ItemSrc) => {
  const addValue = (cartItems.innerHTML += `

<div class="cart-row item">
            <div class="cart-item cart-column">
              <img
                
                 class="cart-item-image"
                alt="Coffee"
                src="${ItemSrc}"
                width="100"
                height="100"
              />
              <span class="cart-item-title">${ItemName}</span>
            </div>
            <span class="cart-column">
              $ <span class="cart-price-item-item">${ItemPrice}</span>
            </span>
            <div class="cart-quantity cart-column" style="flex-grow: 1">
              <input class="cart-quantity-input" type="number" value="1" />
              <button class="btn btn-danger btn-remove" type="button">
                REMOVE
              </button>
            </div>
          </div>

`);
};
const addTotal=(Price)=>{
  const total=0;
const totalPrice=document.querySelector(".cart-total-price").textContent
const itemUnitPrice=Number(cartItems.querySelector(".cart-price-item-item").textContent)
const ItemQty=Number(cartItems.querySelector(".cart-quantity-input").value)
 total=itemUnitPrice*ItemQty
console.log(total);
console.log(typeof itemUnitPrice);
console.log(typeof ItemQty);

// const myPrice=Number(Price)
// const sub= Number(totalPrice.textContent);
// const myValue= totalPrice.innerText=myPrice+sub
// console.log(typeof sub);

// console.log(typeof myPrice);
// return myValue

}
const calculate=()=>{





}
container.addEventListener("click", (e) => {
  
  const getBtn = e.target.className;
  if (getBtn === "btn btn-primary shop-item-button") {
    const ItemName=e.target.parentElement.parentElement.querySelector(".shop-item-title").innerText
    const ItemSrc=e.target.parentElement.parentElement.querySelector(".shop-item-image").src
    const ItemPrice =e.target.parentElement.querySelector(".shop-item-price").innerText
//     console.log(ItemName);
//     console.log(ItemSrc);
// console.log(ItemPrice);

creatHtml(ItemName,ItemPrice,ItemSrc)
addTotal(ItemPrice)
  }
});
