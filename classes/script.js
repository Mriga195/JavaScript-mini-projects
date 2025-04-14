class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    calculateTOtal(salesTax){
        return this.price + (this.price * (salesTax / 100.0));
    }
}

const product1 =  new Product("Shirt", 19.99);

product1.displayProduct();