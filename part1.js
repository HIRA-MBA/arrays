"use strict";
// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
let products = [{ name: "suzuki Mehran", allothercolorprice: 500000, inventory: { stock: 4, colorOptions: ["black", "white", "grey"] } },
    { name: "Suzuki Alto", allothercolorprice: 600000, inventory: { stock: 3, colorOptions: ["white", "green", "silver"] } },
    { name: "Suzuki Liana", allothercolorprice: 1550000, inventory: { stock: 10, colorOptions: ["black", "silver", "white"] } }];
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
function changeColor(product, color, newprice = product.allothercolorprice) {
    if (color === "red") {
        product.onlynewcolorprice = Math.round(1.1 * product.allothercolorprice);
        product.inventory.colorOptions.push(color);
        product.newcolor = color;
        product.specialinstructions = "price increased due to color";
    }
    else if (color === "blue") {
        product.onlynewcolorprice = Math.round(0.95 * product.allothercolorprice);
        product.inventory.colorOptions.push(color);
        product.newcolor = color;
        product.specialinstructions = "price decreased due to color";
    }
    ;
    return product;
}
changeColor(products[0], "blue");
changeColor(products[1], "red");
changeColor(products[2], "blue");
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.
console.log("\n\n \t Part 1 : product stock and inventory \n\n ");
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
;
