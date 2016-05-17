import {Component, OnInit} from "angular2/core";
import {UsersService} from "./users.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {SpinnerComponent} from "../shared/spinner.component";

@Component({
    selector: "users",
    templateUrl: "app/users/users.component.html",
    directives: [ROUTER_DIRECTIVES, SpinnerComponent],
    providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit{
    users;
    isLoading = true;
    
    constructor(private _userService: UsersService){
    }
    
    ngOnInit(){
        this._userService.getUsers().subscribe(users => {
            this.users = users;
        }, null, () => {
            this.isLoading = false;
        });
    }
    
    deleteUser(user){
        var i = this.users.indexOf(user);
        if(i != -1){
            this.users.splice(i, 1);
        }
        this._userService.deleteUser(user.id).subscribe(
            x=>{
                
            }, null,
            ()=>{
            }
        );
    }
}