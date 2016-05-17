import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class UsersService{
    private usersUrl = "http://jsonplaceholder.typicode.com/users";
    
    constructor(private _http: Http){
    }
    
    getUsers(){
        return this._http.get(this.usersUrl).map(res => res.json());
    }
    
    createUser(user){
        return this._http.post(this.usersUrl, JSON.stringify(user)).map(res => res.json());
    }
    
    updateUser(user){
        return this._http.put(this.usersUrl+"/"+user.id, JSON.stringify(user)).map(res => res.json());
    }
    
    getUser(id){
        return this._http.get(this.usersUrl+"/"+id).map(res => res.json());
    }
    
    deleteUser(id){
        return this._http.delete(this.usersUrl+"/"+id).map(res => res.json());
    }
}