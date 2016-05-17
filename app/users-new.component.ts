import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, CanActivate, CanDeactivate, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
import {HTTP_PROVIDERS} from "angular2/http";

import {EmailValidators} from "./shared/email.validators";
import {UsersService} from "./users/users.service";
import {User} from "./users/user";

@Component({
    selector: "users-new",
    templateUrl: "app/users-new.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService, HTTP_PROVIDERS],
    styles: [`
        
    `]
})
export class UsersNewComponent implements CanDeactivate, OnInit{
    newUserForm: ControlGroup;
    heading = "Add a User";
    user : User;
    isLoading = true;
    
    constructor(private _fb: FormBuilder, 
                private _usersService: UsersService, 
                private _router: Router,
                private _routeParams: RouteParams){
                    
        this.user = new User();
    }
    
    ngOnInit(){
        this.newUserForm = this._fb.group({
            name: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required, EmailValidators.validEmail])],
            phone: ['', Validators.compose([])],
            //address: fb.group({
                        street: [],
                        suite: [],
                        city: [],
                        zipcode: []  
              //      })
        });
        
        var id = this._routeParams.get("id");
        if(id){
            this.heading = "Edit User";
            this._usersService.getUser(id).subscribe(response => {
                this.user = response;
            }, 
            response => {
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
            }, 
            ()=>{this.isLoading = false;});
        }
        else{
            this.heading = "Add a User";
            this.isLoading = false;
        }
    }
    
    save(){
        if(this.heading == "Add a User"){
            this._usersService.createUser(this.user).subscribe (x => {
            });
        }
        else{
            this._usersService.updateUser(this.user).subscribe (x => {
            });
        }
        this._router.navigate(['Users']);
    }
    
    routerCanDeactivate(next, previous){
        if(this.newUserForm.dirty)
            return confirm("Are you sure?");
    }
}