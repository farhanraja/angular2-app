System.register(["angular2/core", "angular2/router", "angular2/common", "angular2/http", "../shared/email.validators", "./users.service", "./user"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, http_1, email_validators_1, users_service_1, user_1;
    var UsersNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (email_validators_1_1) {
                email_validators_1 = email_validators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UsersNewComponent = (function () {
                function UsersNewComponent(_fb, _usersService, _router, _routeParams) {
                    this._fb = _fb;
                    this._usersService = _usersService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.heading = "Add a User";
                    this.isLoading = true;
                    this.user = new user_1.User();
                }
                UsersNewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.newUserForm = this._fb.group({
                        name: ['', common_1.Validators.compose([common_1.Validators.required])],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, email_validators_1.EmailValidators.validEmail])],
                        phone: ['', common_1.Validators.compose([])],
                        //address: fb.group({
                        street: [],
                        suite: [],
                        city: [],
                        zipcode: []
                    });
                    var id = this._routeParams.get("id");
                    if (id) {
                        this.heading = "Edit User";
                        this._usersService.getUser(id).subscribe(function (response) {
                            _this.user = response;
                        }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        }, function () { _this.isLoading = false; });
                    }
                    else {
                        this.heading = "Add a User";
                        this.isLoading = false;
                    }
                };
                UsersNewComponent.prototype.save = function () {
                    if (this.heading == "Add a User") {
                        this._usersService.createUser(this.user).subscribe(function (x) {
                        });
                    }
                    else {
                        this._usersService.updateUser(this.user).subscribe(function (x) {
                        });
                    }
                    this._router.navigate(['Users']);
                };
                UsersNewComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.newUserForm.dirty)
                        return confirm("Are you sure?");
                };
                UsersNewComponent = __decorate([
                    core_1.Component({
                        selector: "users-new",
                        templateUrl: "app/users-new.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        styles: ["\n        \n    "]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], UsersNewComponent);
                return UsersNewComponent;
            }());
            exports_1("UsersNewComponent", UsersNewComponent);
        }
    }
});
//# sourceMappingURL=users-new.component.js.map