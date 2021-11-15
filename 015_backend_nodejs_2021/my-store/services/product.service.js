const faker = require('faker');

class ProductService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        let limit = 50;
        for (let i = 0; i < (limit > 50 ? 50 : limit); i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            });
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }

        this.products.push(newProduct);

        return newProduct;
    }

    async find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);   
            }, 8000);
        });
    }

    async findOne(id) {
        return this.products.find(item => item.id === id);
    }

    async update(id, changes) {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }

        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        }

        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(product => product.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }

        this.products.splice(index, 1);
        return { id };
    }

}

module.exports = ProductService