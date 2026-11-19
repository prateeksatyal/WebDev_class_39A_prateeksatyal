// Q1: Shopping Discount
const purchaseAmount = 120;
let finalPrice;

if (purchaseAmount >= 100) {
    finalPrice = purchaseAmount * 0.80;
} else if (purchaseAmount >= 50) {
    finalPrice = purchaseAmount * 0.90;
} else {
    finalPrice = purchaseAmount;
}

console.log("Final Price: $" + finalPrice.toFixed(2));
