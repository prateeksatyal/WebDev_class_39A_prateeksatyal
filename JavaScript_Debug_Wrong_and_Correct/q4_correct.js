const calculateBill = (price, quantity, discount) => {
  if (quantity <= 0) {
    console.log("Invalid quantity");
    return;
  }

  if (discount < 0 || discount > 100) {
    console.log("Invalid discount");
    return;
  }

  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  const finalAmount = subtotal - discountAmount;

  console.log("Subtotal: " + subtotal);
  console.log("Discount: " + discountAmount);
  console.log("Final Amount: " + finalAmount);
  return finalAmount;
};

const bill1 = calculateBill(500, 3, 10);
const bill2 = calculateBill(1000, 2, 20);

console.log("Total payable: " + bill1);
console.log("Total payable: " + bill2);
