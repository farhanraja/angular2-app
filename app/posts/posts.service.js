System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PostsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PostsService = (function () {
                function PostsService(_http) {
                    this._http = _http;
                    this.usersUrl = "http://jsonplaceholder.typicode.com/posts";
                }
                PostsService.prototype.getPosts = function (userId) {
                    var mUrl = this.usersUrl;
                    if (userId != -1) {
                        mUrl += "?userId=" + userId;
                    }
                    return this._http.get(mUrl).map(function (res) { return res.json(); });
                };
                PostsService.prototype.getComments = function (id) {
                    return this._http.get(this.usersUrl + "/" + id + "/comments").map(function (res) { return res.json(); });
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map