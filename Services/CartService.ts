import { Service } from "./Service";

export class CartService extends Service{
    constructor(){
        super('https://dummyjson.com');
    }

    getCartList(){
        return this.get('/cart', this.response).catch((exeption) => this.catch(exeption));
    }

    getCart(id: any){
        return this.get(`/cart/${id}`, this.response).catch((exeption) => this.catch(exeption));
    }
}