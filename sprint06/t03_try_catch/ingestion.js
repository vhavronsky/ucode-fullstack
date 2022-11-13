class Ingestion {
    constructor(meal_type, day_of_diet, products) {
        this.id = Math.floor(Math.random() * 10);
        this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
        this.products = [];
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == product) {
                return this.products[i];
            }
        }
    }

    getFromFridge(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name == product) {
                if (this.products[i].kcal > 200) {
                    throw new Error(`Too many calories in ${product} for ${this.meal_type}`);
                } 
                return true;
            } 
        }
    }

}

module.exports.Ingestion = Ingestion;