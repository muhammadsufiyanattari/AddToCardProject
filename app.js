const container = document.querySelector(".custom-shop-container");
const inputQty = document.querySelector(".cart-quantity-input");
const cartappend=document.querySelector(".cart-items");
const purchaseBtn = document.querySelector("#purchaseBtn");
const creatHtml = (ItemName, ItemPrice, ItemSrc) => {
  const addedCardRow = document.createElement("div");
addedCardRow.className = "cart-row item";
  const addValue = (addedCardRow.innerHTML += `

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
          

`);
cartappend.appendChild(addedCardRow);
};
const calculateTotal = () => {
  const cartRows=document.querySelectorAll(".cart-items .cart-row");
  let total = 0;
cartRows.forEach((cartRow) => {
  const Price=Number(cartRow.querySelector(".cart-price-item-item").innerText)
  const Qty=Number(cartRow.querySelector(".cart-quantity-input").value)
   total+=Price*Qty
  console.log(total)
  console.log(Qty)

})
console.log(total);
const totalPriceElement = document.querySelector(".cart-total-price");
totalPriceElement.innerText = total.toFixed(2);
};
const findCartItemName = (ItemName) => {
  let ItemTrue = false;
  const cartRows = document.querySelectorAll(".cart-items .cart-row");
  
cartRows.forEach((cartRow) => {
  const cardItemName = cartRow.querySelector(".cart-item-title").textContent;
  const Qty=cartRow.querySelector(".cart-quantity-input");

  if (cardItemName === ItemName) {
    Qty.value=Number (Qty.value)+1;
        calculateTotal();

    return ItemTrue= cartRow;
  }
});
return ItemTrue;
};

container.addEventListener("click", (e) => {
  const getBtn = e.target.className;
  if (getBtn === "btn btn-primary shop-item-button") {
    const ItemName =
      e.target.parentElement.parentElement.querySelector(
        ".shop-item-title",
      ).innerText;
    const ItemSrc =
      e.target.parentElement.parentElement.querySelector(
        ".shop-item-image",
      ).src;
    const ItemPrice =
      e.target.parentElement.querySelector(".shop-item-price").innerText;
  
const isExist=findCartItemName(ItemName)
// console.log(isExist)
    if (!isExist) {
creatHtml(ItemName, ItemPrice, ItemSrc);
      calculateTotal();
    } else {
            // alert("Item already in cart")
            // findCartItemName(ItemName)

    }
  }
});
cartappend.addEventListener("change", (e) => {
  const getBtn = e.target.className;
  if (getBtn === "cart-quantity-input") {
    calculateTotal();
  }
})
cartappend.addEventListener("click", (e) => {
  const getBtn = e.target.className;
  if (getBtn === "btn btn-danger btn-remove") {
e.target.closest(".cart-row").remove();
      calculateTotal();

    
  }
})
purchaseBtn.addEventListener("click", (e) => {
  if(cartappend.innerHTML){
    alert("Your cart is empty!");
    return;
  }else{
  cartappend.innerHTML="";
  alert("Thank you for your shopping!");

  }
})