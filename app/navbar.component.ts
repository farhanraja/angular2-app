import {Component, Inject} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";


@Component({
    selector: "nav-bar",
    templateUrl: '/app/navbar.template.html',
    directives: [ROUTER_DIRECTIVES]
    
})
export class NavBarComponent{
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}