import { Service } from "./Service";

export class UserService extends Service{
    constructor(){
        super('https://dummyjson.com');
    }

    getAllUsers(){
        return this.get('/users', this.response).catch((exeption) => this.catch(exeption));
    }

    getUser(id : number){
        return this.get(`/users/${id}`, this.response).catch((exeption) => this.catch(exeption));
    }
}