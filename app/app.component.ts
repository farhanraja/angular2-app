import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";

import {NavBarComponent} from "./navbar.component";
import {HomeComponent} from "./home.component";
import {UsersComponent} from "./users/users.component";
import {PostsComponent} from "./posts/posts.component";
import {UsersNewComponent} from "./users-new.component";
import {NotFoundComponent} from "./not-found.component";

@RouteConfig([
    {path: "/", name: "Home", component: UsersComponent, useAsDefault: true},
    {path: "/users", name: "Users", component: UsersComponent},
    {path: "/users/new", name: "UsersNew", component: UsersNewComponent},
    {path: "/user/:id", name: "User", component: UsersNewComponent},
    {path: "/posts", name: "Posts", component: PostsComponent},
    {path: "/*other", name: "Other", redirectTo: ["Home"] },
    {path: "/not-found", name: "NotFound", component: NotFoundComponent}
])

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
export class AppComponent {
}