import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService{
    private usersUrl = "http://jsonplaceholder.typicode.com/posts";
    
    constructor(private _http: Http){
    }
    
    getPosts(userId){
        var mUrl = this.usersUrl;
        if(userId != -1){
            mUrl += "?userId="+userId;
        }
        return this._http.get(mUrl).map(res => res.json());
    }
    
    getComments(id){
        return this._http.get(this.usersUrl+"/"+id+"/comments").map(res => res.json());
    }
}