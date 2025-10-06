console.log("Video 45");

const product1 = {
  name: "T-Shirt",
  price: 19.99,
  inStock: true,
};

const product2 = {
  name: "Jeans",
  price: 49.99,
  inStock: false,
};

const product3 = {
  name: "Sneakers",
  price: 89.99,
  inStock: true,
};

const product4 = {
  name: "Hat",
  price: 14.99,
  inStock: true,
};

const product5 = {
  name: "Jacket",
  price: 99.99,
  inStock: false,
};

const products = [product1, product2, product3, product4, product5];

console.log("Orginal products array:");
console.log(products);

//1. Name of the first product
console.log("1. Name of the first product");
console.log(products[0].name);

//2. Change the price of the second product to 150 and print all products
console.log(
  "2. Change the price of the second product to 150 and print all products"
);
products[1].price = 150;
console.log(products);

//3. Add the new product to the last array and print all products
console.log("3. Add the new product to the last array and print all products");
const newProduct = {
  name: "Socks",
  price: 9.99,
  inStock: true,
};

products.push(newProduct);
console.log(products);

//4. Delete the last product in the array and print all products
console.log("4. Delete the last product in the array and print all products");
products.pop();
console.log(products);

//5. Use forEach() to print all product names
console.log("5. Use forEach() to print all product names");
products.forEach((item, index) => console.log(item.name));

//6. Use map() to new array to contain all product prices and print it.
const prices = products.map((item, index) => item.price);
console.log(
  "6. Use map() to new array to contain all product prices and print it."
);
console.log(prices);

//7. Use filter() to take products with inStock true and print it.
const inStockProducts = products.filter((item, index) => item.inStock === true);
console.log("7. Use filter() to take products with inStock true and print it.");
console.log(inStockProducts);

//8. Use for..in() to print all properties of the first product.
console.log("8. Use for..in() to print all properties of the first product.");
for (let key in products[0]) {
  console.log(key, products[0][key]);
}
