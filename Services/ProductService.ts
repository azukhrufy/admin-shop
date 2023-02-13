import { Service } from "./Service";

export class ProductService extends Service{
    constructor(){
        super('https://dummyjson.com');
    }

    getProduct(){
        return this.get('/products', this.response).catch((exeption) => this.catch(exeption));
    }

    getCategories() {
        return this.get('/products/categories', this.response).catch((exeption) => this.catch(exeption));
    }

    getProductSearch(q : any){
        return this.get(`/products/search?q=${q}`, this.response).catch((exeption) => this.catch(exeption));
    }

    getProductFilter(c : any){
        if(c){
            return this.get(`/products/category/${c}`, this.response).catch((exeption) => this.catch(exeption));
        }else{
            return this.get('/products', this.response).catch((exeption) => this.catch(exeption));
        }
        
    }
}