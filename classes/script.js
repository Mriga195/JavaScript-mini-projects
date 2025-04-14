class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTOtal(salesTax){
        return (this.price + (this.price * (salesTax / 100.0))).toFixed(2);
    }
}

const product1 =  new Product("Shirt", 19.99);
const product2 =  new Product("Laptop", 1200.99);
const product3 =  new Product("aeroplane", 600000.99);

product1.displayProduct();
console.log(product2.calculateTOtal(7));
product3.displayProduct();