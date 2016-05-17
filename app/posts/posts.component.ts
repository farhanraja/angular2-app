import {Component, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {PostsService} from "./posts.service";
import {UsersService} from "../users/users.service";
import {SpinnerComponent} from "../shared/spinner.component";
import {PaginationComponent} from "../shared/pagination.component";

@Component({
    selector: "posts",
    templateUrl: "app/posts/posts.component.html",
    providers: [PostsService, HTTP_PROVIDERS, UsersService],
    directives: [SpinnerComponent, PaginationComponent],
    styles: [`
        li{
            cursor:pointer;
         }
        li:hover{
            background:#ecf0f1;
         }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus{
            background-color:#ecf0f1;
            border-color:#ecf0f1;
            color:#2c3e50;
        }
    `]
})
export class PostsComponent implements OnInit{
    posts=[];
    pagedPosts = [];
    isLoading = true;
    isCommentLoading = true;
    selectedPost;
    comments = null;
    users = null;
    pageSize = 10;
    
    constructor(private _postsService: PostsService, private _usersService: UsersService){
    }
    
    private showPost(post){
        this.comments = null;
        this.isCommentLoading=true;
        this.selectedPost = post;
        this._postsService.getComments(post.id).subscribe(
            x => { this.comments = x; },
            null,
            () => {
                this.isCommentLoading = false;
            }
        );
    }
    
    private updatePosts(value){
        this.posts = [];
        this.selectedPost = null;
        this.isLoading = true;
        this._postsService.getPosts(value).subscribe(
            x => {  this.posts = x;
                    this.pagedPosts = _.take(this.posts, this.pageSize);
                },
            null,
            ()=>{ this.isLoading = false; }
        );
    }
    
    ngOnInit(){
        this._usersService.getUsers().subscribe(
            x => {this.users = x;}
        );
        this.updatePosts(-1);
    }
    
    onPageChanged(page){
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }
}