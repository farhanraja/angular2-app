System.register(["angular2/core", "angular2/http", "./posts.service", "../users/users.service", "../shared/spinner.component", "../shared/pagination.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, posts_service_1, users_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.isLoading = true;
                    this.isCommentLoading = true;
                    this.comments = null;
                    this.users = null;
                    this.pageSize = 10;
                }
                PostsComponent.prototype.showPost = function (post) {
                    var _this = this;
                    this.comments = null;
                    this.isCommentLoading = true;
                    this.selectedPost = post;
                    this._postsService.getComments(post.id).subscribe(function (x) { _this.comments = x; }, null, function () {
                        _this.isCommentLoading = false;
                    });
                };
                PostsComponent.prototype.updatePosts = function (value) {
                    var _this = this;
                    this.posts = [];
                    this.selectedPost = null;
                    this.isLoading = true;
                    this._postsService.getPosts(value).subscribe(function (x) {
                        _this.posts = x;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, null, function () { _this.isLoading = false; });
                };
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers().subscribe(function (x) { _this.users = x; });
                    this.updatePosts(-1);
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: "posts",
                        templateUrl: "app/posts/posts.component.html",
                        providers: [posts_service_1.PostsService, http_1.HTTP_PROVIDERS, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: ["\n        li{\n            cursor:pointer;\n         }\n        li:hover{\n            background:#ecf0f1;\n         }\n        .list-group-item.active,\n        .list-group-item.active:hover,\n        .list-group-item.active:focus{\n            background-color:#ecf0f1;\n            border-color:#ecf0f1;\n            color:#2c3e50;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map