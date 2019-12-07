(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pedidos_lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos/lista-pedidos/lista-pedidos.component */ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "./src/app/layout/home-layout/home-layout.component.ts");
/* harmony import */ var _core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/dashboard/dashboard.component */ "./src/app/core/dashboard/dashboard.component.ts");
/* harmony import */ var _categorias_lista_categorias_lista_categorias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias/lista-categorias/lista-categorias.component */ "./src/app/categorias/lista-categorias/lista-categorias.component.ts");
/* harmony import */ var _categorias_form_categorias_form_categorias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categorias/form-categorias/form-categorias.component */ "./src/app/categorias/form-categorias/form-categorias.component.ts");
/* harmony import */ var _produtos_lista_produtos_lista_produtos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produtos/lista-produtos/lista-produtos.component */ "./src/app/produtos/lista-produtos/lista-produtos.component.ts");
/* harmony import */ var _produtos_form_produtos_form_produtos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./produtos/form-produtos/form-produtos.component */ "./src/app/produtos/form-produtos/form-produtos.component.ts");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "./src/app/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _usuarios_criar_conta_criar_conta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuarios/criar-conta/criar-conta.component */ "./src/app/usuarios/criar-conta/criar-conta.component.ts");
/* harmony import */ var _usuarios_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usuarios/esqueci-senha/esqueci-senha.component */ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.ts");
/* harmony import */ var _usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuarios/login/login.component */ "./src/app/usuarios/login/login.component.ts");
/* harmony import */ var _usuarios_shared_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuarios/shared/auth.guard */ "./src/app/usuarios/shared/auth.guard.ts");
/* harmony import */ var _pedidos_detalhe_pedido_detalhe_pedido_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pedidos/detalhe-pedido/detalhe-pedido.component */ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.ts");
















var routes = [
    {
        path: '',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutComponent"],
        canActivate: [_usuarios_shared_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
            { path: 'pedidos', component: _pedidos_lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_1__["ListaPedidosComponent"] },
            { path: 'pedidos/detalhe/:key', component: _pedidos_detalhe_pedido_detalhe_pedido_component__WEBPACK_IMPORTED_MODULE_15__["DetalhePedidoComponent"] },
            { path: 'categorias', component: _categorias_lista_categorias_lista_categorias_component__WEBPACK_IMPORTED_MODULE_6__["ListaCategoriasComponent"] },
            { path: 'categorias/nova', component: _categorias_form_categorias_form_categorias_component__WEBPACK_IMPORTED_MODULE_7__["FormCategoriasComponent"] },
            { path: 'categorias/editar/:key', component: _categorias_form_categorias_form_categorias_component__WEBPACK_IMPORTED_MODULE_7__["FormCategoriasComponent"] },
            { path: 'produtos', component: _produtos_lista_produtos_lista_produtos_component__WEBPACK_IMPORTED_MODULE_8__["ListaProdutosComponent"] },
            { path: 'produtos/novo', component: _produtos_form_produtos_form_produtos_component__WEBPACK_IMPORTED_MODULE_9__["FormProdutosComponent"] },
            { path: 'produtos/editar/:key', component: _produtos_form_produtos_form_produtos_component__WEBPACK_IMPORTED_MODULE_9__["FormProdutosComponent"] },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        component: _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_10__["LoginLayoutComponent"],
        children: [
            { path: 'login', component: _usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
            { path: 'criar-conta', component: _usuarios_criar_conta_criar_conta_component__WEBPACK_IMPORTED_MODULE_11__["CriarContaComponent"] },
            { path: 'esqueci-senha', component: _usuarios_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_12__["EsqueciSenhaComponent"] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'deliveryweb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/dashboard/dashboard.component */ "./src/app/core/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/home-layout/home-layout.component */ "./src/app/layout/home-layout/home-layout.component.ts");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "./src/app/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _categorias_form_categorias_form_categorias_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categorias/form-categorias/form-categorias.component */ "./src/app/categorias/form-categorias/form-categorias.component.ts");
/* harmony import */ var _categorias_lista_categorias_lista_categorias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categorias/lista-categorias/lista-categorias.component */ "./src/app/categorias/lista-categorias/lista-categorias.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _produtos_form_produtos_form_produtos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./produtos/form-produtos/form-produtos.component */ "./src/app/produtos/form-produtos/form-produtos.component.ts");
/* harmony import */ var _produtos_lista_produtos_lista_produtos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./produtos/lista-produtos/lista-produtos.component */ "./src/app/produtos/lista-produtos/lista-produtos.component.ts");
/* harmony import */ var _confirm_modal_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirm-modal/confirm-modal/confirm-modal.component */ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _confirm_modal_shared_confirm_template_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./confirm-modal/shared/confirm-template.directive */ "./src/app/confirm-modal/shared/confirm-template.directive.ts");
/* harmony import */ var _usuarios_criar_conta_criar_conta_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./usuarios/criar-conta/criar-conta.component */ "./src/app/usuarios/criar-conta/criar-conta.component.ts");
/* harmony import */ var _usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./usuarios/login/login.component */ "./src/app/usuarios/login/login.component.ts");
/* harmony import */ var _usuarios_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./usuarios/esqueci-senha/esqueci-senha.component */ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.ts");
/* harmony import */ var _pedidos_lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pedidos/lista-pedidos/lista-pedidos.component */ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.ts");
/* harmony import */ var _pedidos_detalhe_pedido_detalhe_pedido_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pedidos/detalhe-pedido/detalhe-pedido.component */ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _core_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_15__["HomeLayoutComponent"],
                _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_16__["LoginLayoutComponent"],
                _categorias_form_categorias_form_categorias_component__WEBPACK_IMPORTED_MODULE_17__["FormCategoriasComponent"],
                _categorias_lista_categorias_lista_categorias_component__WEBPACK_IMPORTED_MODULE_18__["ListaCategoriasComponent"],
                _produtos_form_produtos_form_produtos_component__WEBPACK_IMPORTED_MODULE_20__["FormProdutosComponent"],
                _produtos_lista_produtos_lista_produtos_component__WEBPACK_IMPORTED_MODULE_21__["ListaProdutosComponent"],
                _confirm_modal_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmModalComponent"],
                _confirm_modal_shared_confirm_template_directive__WEBPACK_IMPORTED_MODULE_23__["ConfirmTemplateDirective"],
                _usuarios_criar_conta_criar_conta_component__WEBPACK_IMPORTED_MODULE_24__["CriarContaComponent"],
                _usuarios_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _usuarios_esqueci_senha_esqueci_senha_component__WEBPACK_IMPORTED_MODULE_26__["EsqueciSenhaComponent"],
                _pedidos_lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_27__["ListaPedidosComponent"],
                _pedidos_detalhe_pedido_detalhe_pedido_component__WEBPACK_IMPORTED_MODULE_28__["DetalhePedidoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categorias/form-categorias/form-categorias.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categorias/form-categorias/form-categorias.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYXMvZm9ybS1jYXRlZ29yaWFzL2Zvcm0tY2F0ZWdvcmlhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categorias/form-categorias/form-categorias.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categorias/form-categorias/form-categorias.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Nova Edição</h3>\r\n<hr>\r\n<form [formGroup]=\"formCategoria\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"nome\">JAV</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" formControlName=\"nome\" >\r\n  </div>\r\n  <div *ngIf=\"nome.invalid && (nome.dirty || nome.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"nome.errors?.required\">\r\n      O nome é obrigatório.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"descricao\">Edição</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"descricao\" placeholder=\"Edição do JAV\" formControlName=\"descricao\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"descricao\">Ano</label>\r\n    <input type=\"year\" class=\"form-control\" id=\"descricao\" placeholder=\"Ano\" formControlName=\"descricao\">\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\r\n  <a class=\"btn btn-secondary ml-2\" [routerLink]=\"['/categorias']\">Voltar</a>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/categorias/form-categorias/form-categorias.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categorias/form-categorias/form-categorias.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormCategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCategoriasComponent", function() { return FormCategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/categorias.service */ "./src/app/categorias/shared/categorias.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var FormCategoriasComponent = /** @class */ (function () {
    function FormCategoriasComponent(formBuilder, route, categoriasService, toastr, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.categoriasService = categoriasService;
        this.toastr = toastr;
        this.router = router;
    }
    FormCategoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        this.key = this.route.snapshot.paramMap.get('key');
        if (this.key) {
            var categoriaSubscribe_1 = this.categoriasService.getByKey(this.key)
                .subscribe(function (categorias) {
                categoriaSubscribe_1.unsubscribe();
                _this.formCategoria.setValue({ nome: categorias.nome, descricao: categorias.descricao });
            });
        }
    };
    Object.defineProperty(FormCategoriasComponent.prototype, "nome", {
        get: function () { return this.formCategoria.get('nome'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormCategoriasComponent.prototype, "descricao", {
        get: function () { return this.formCategoria.get('descricao'); },
        enumerable: true,
        configurable: true
    });
    FormCategoriasComponent.prototype.criarFormulario = function () {
        this.key = null;
        this.formCategoria = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricao: [''],
        });
    };
    FormCategoriasComponent.prototype.onSubmit = function () {
        if (this.formCategoria.valid) {
            if (this.key) {
                this.categoriasService.update(this.formCategoria.value, this.key);
            }
            else {
                this.categoriasService.insert(this.formCategoria.value);
            }
            this.router.navigate(['categorias']);
            this.toastr.success('Categoria salva com sucesso!!!');
        }
    };
    FormCategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-form-categorias',
            template: __webpack_require__(/*! ./form-categorias.component.html */ "./src/app/categorias/form-categorias/form-categorias.component.html"),
            styles: [__webpack_require__(/*! ./form-categorias.component.css */ "./src/app/categorias/form-categorias/form-categorias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_categorias_service__WEBPACK_IMPORTED_MODULE_1__["CategoriasService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FormCategoriasComponent);
    return FormCategoriasComponent;
}());



/***/ }),

/***/ "./src/app/categorias/lista-categorias/lista-categorias.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/categorias/lista-categorias/lista-categorias.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYXMvbGlzdGEtY2F0ZWdvcmlhcy9saXN0YS1jYXRlZ29yaWFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/categorias/lista-categorias/lista-categorias.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/categorias/lista-categorias/lista-categorias.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>JAV</h3>\r\n<hr>\r\n<div class=\"card\">\r\n  <div class=\"card-header text-right\">\r\n    <a class=\"btn btn-primary\" role=\"button\" [routerLink]=\"['/categorias/nova']\">Nova categoria</a>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <table class=\"table grid\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">JAV</th>\r\n          <th scope=\"col\">Edição</th>\r\n          <th scope=\"col\">Ano</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let categoria of categorias | async\" >\r\n          <td>{{ categoria.nome }}</td>\r\n          <td>{{ categoria.edicao }}</td>\r\n          <td>{{ categoria.ano}}</td>\r\n          <td class=\"edit\">\r\n            <a class=\"btn btn-warning text-white\" role=\"button\" [routerLink]=\"['/categorias/editar', categoria.key]\"><i class=\"far fa-edit\"></i>Editar</a>\r\n          </td>\r\n          <td class=\"delete\">\r\n            <button class=\"btn btn-danger\" (click)=\"remover(categoria.key)\"><i class=\"far fa-trash-alt\"></i>Excluir</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/categorias/lista-categorias/lista-categorias.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/categorias/lista-categorias/lista-categorias.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaCategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCategoriasComponent", function() { return ListaCategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_categorias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/categorias.service */ "./src/app/categorias/shared/categorias.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ListaCategoriasComponent = /** @class */ (function () {
    function ListaCategoriasComponent(categoriasService, toastr) {
        this.categoriasService = categoriasService;
        this.toastr = toastr;
    }
    ListaCategoriasComponent.prototype.ngOnInit = function () {
        this.categorias = this.categoriasService.getAll();
    };
    ListaCategoriasComponent.prototype.remover = function (key) {
        var _this = this;
        this.categoriasService.remove(key)
            .then(function (mensagem) {
            _this.toastr.success('Categoria excluida com sucesso!');
        })
            .catch(function (mensagem) {
            _this.toastr.error(mensagem);
        });
    };
    ListaCategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-lista-categorias',
            template: __webpack_require__(/*! ./lista-categorias.component.html */ "./src/app/categorias/lista-categorias/lista-categorias.component.html"),
            styles: [__webpack_require__(/*! ./lista-categorias.component.css */ "./src/app/categorias/lista-categorias/lista-categorias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_categorias_service__WEBPACK_IMPORTED_MODULE_1__["CategoriasService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ListaCategoriasComponent);
    return ListaCategoriasComponent;
}());



/***/ }),

/***/ "./src/app/categorias/shared/categorias.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/categorias/shared/categorias.service.ts ***!
  \*********************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CategoriasService = /** @class */ (function () {
    function CategoriasService(db) {
        this.db = db;
        this.categoriasRef = this.db.list('categorias/');
    }
    CategoriasService.prototype.insert = function (categoria) {
        return this.categoriasRef.push(categoria);
    };
    // update(categoria: any, key: string) {
    //   this.categoriasRef.update(key,categoria);
    // }
    CategoriasService.prototype.update = function (categoria, key) {
        var updateObj = {};
        var path = 'categorias/' + key;
        var pathp = 'produtos/';
        updateObj[path] = categoria;
        var subscribe = this.getProdutosByCategoria(key).subscribe(function (produtos) {
            subscribe.unsubscribe();
            produtos.forEach(function (produto) {
                updateObj["" + pathp + produto.key + "/categoriaNome"] = categoria.nome;
            });
        });
    };
    CategoriasService.prototype.getAll = function () {
        return this.categoriasRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: m.payload.key }, m.payload.val())); });
        }));
    };
    CategoriasService.prototype.getByKey = function (key) {
        var path = 'categorias/' + key;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) {
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: change.key }, change.payload.val()));
        }));
    };
    CategoriasService.prototype.getProdutosByCategoria = function (key) {
        return this.db.list('produtos/', function (q) { return q.orderByChild('categoriaKey').equalTo(key); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return ({ key: m.key }); });
        }));
    };
    CategoriasService.prototype.remove = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var subscribe = _this.getProdutosByCategoria(key).subscribe(function (produtos) {
                subscribe.unsubscribe();
                if (produtos.length == 0) {
                    return _this.categoriasRef.remove(key);
                }
                else {
                    reject('Não é possível excluir a categoria pois ela tem produtos associados.');
                }
            });
        });
    };
    CategoriasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CategoriasService);
    return CategoriasService;
}());



/***/ }),

/***/ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/confirm-modal/confirm-modal/confirm-modal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/confirm-modal/confirm-modal/confirm-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  confirm-modal works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/confirm-modal/confirm-modal/confirm-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent() {
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.css */ "./src/app/confirm-modal/confirm-modal/confirm-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/confirm-modal/shared/confirm-template.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/confirm-modal/shared/confirm-template.directive.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmTemplateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmTemplateDirective", function() { return ConfirmTemplateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmTemplateDirective = /** @class */ (function () {
    function ConfirmTemplateDirective() {
    }
    ConfirmTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmTemplate]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmTemplateDirective);
    return ConfirmTemplateDirective;
}());



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3>Dashboard</h3>\r\n<hr>\r\n\r\n<section class=\"mb-5\" id=\"dashboard\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md\">\r\n        <div class=\"card text-white bg-danger\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title\">{{ totalAguardandoConfirmacao | async }}</h2>\r\n            <p class=\"card-text\">Aguardando confirmação</p>\r\n            <div class=\"icon\">\r\n              <i class=\"fas fa-shopping-bag\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md\">\r\n        <div class=\"card text-white bg-warning\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title\">{{ totalEmPreparacao | async }}</h2>\r\n            <p class=\"card-text\">Em preparação</p>\r\n            <div class=\"icon\">\r\n              <i class=\"far fa-check-circle\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md\">\r\n        <div class=\"card text-white bg-primary\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title\">{{ totalSaiuParaEntrega | async }}</h2>\r\n            <p class=\"card-text\">Saiu para entrega</p>\r\n            <div class=\"icon\">\r\n              <i class=\"fas fa-motorcycle\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md\">\r\n        <div class=\"card text-white bg-success\">\r\n          <div class=\"card-body\">\r\n            <h2 class=\"card-title\">{{ totalEntregue | async }}</h2>\r\n            <p class=\"card-text\">Entregue</p>\r\n            <div class=\"icon\">\r\n              <i class=\"fas fa-check-circle\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<app-lista-pedidos [dashboardMode]=\"true\"></app-lista-pedidos> -->\r\n"

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pedidos_shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pedidos/shared/pedido.service */ "./src/app/pedidos/shared/pedido.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(pedidoService) {
        this.pedidoService = pedidoService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.popularDashboard();
    };
    DashboardComponent.prototype.popularDashboard = function () {
        this.totalAguardandoConfirmacao = this.pedidoService.getTotalAguardandoConfirmacao();
        this.totalEmPreparacao = this.pedidoService.getTotalEmPreparacao();
        this.totalSaiuParaEntrega = this.pedidoService.getTotalSaiuParaEntrega();
        this.totalEntregue = this.pedidoService.getTotalEntregue();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/core/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/core/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pedidos_shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Jornal Árvore da Vida</h5>\r\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Jornal Árvore da Vida</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Alterna navegação\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <!-- <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">JAV <span class=\"sr-only\">(Página atual)</span></a>\r\n      </li> -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/categorias']\">Categorias</a>\r\n      </li> -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/produtos']\">JAV<span class=\"sr-only\">(Página atual)</span></a>\r\n      </li>\r\n      <!-- <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Pedidos\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"#\">Em preparação</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Saiu pra entrega</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Entregue</a>\r\n        </div>\r\n      </li> -->\r\n    </ul>\r\n    <span class=\"navbar-text mr-2\">\r\n      Bem vindo, <!--{{usuario.nome}}-->\r\n    </span>\r\n    <span class=\"navbar-text\">\r\n      <div class=\"dropdown\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <!-- <i class=\"fas fa-user\" *ngIf=\"!usuario.img\" ></i> -->\r\n          <!-- <img [src]=\"usuario.img\" *ngIf=\"usuario.img\" width=\"20\" /> -->\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n          <!-- <a class=\"dropdown-item text-dark\" [routerLink]=\"['/usuario/perfil']\">Perfil do usuário</a> -->\r\n          <!-- <a class=\"dropdown-item text-dark\" [routerLink]=\"['/usuario/enderecos']\">Meus endereçoes</a> -->\r\n          <button class=\"btn btn-link dropdown-item text-dark\" (click)=\"sair()\">Sair</button>\r\n        </div>\r\n      </div>\r\n    </span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(usuarioService, router, afAuth) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.afAuth = afAuth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sair = function () {
        var _this = this;
        this.usuarioService.logout()
            .then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/firebase-path.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/firebase-path.ts ***!
  \**********************************************/
/*! exports provided: FirebasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasePath", function() { return FirebasePath; });
var FirebasePath = /** @class */ (function () {
    function FirebasePath() {
    }
    FirebasePath.USUARIOS = 'usuarios/';
    FirebasePath.USUARIOS_ENDERECOS = 'usuariosEnderecos/';
    FirebasePath.CATEGORIAS = 'categorias/';
    FirebasePath.PRODUTOS = 'produtos/';
    FirebasePath.PEDIDOS = 'pedidos/';
    FirebasePath.PEDIDOS_PRODUTOS = 'pedidosProdutos/';
    return FirebasePath;
}());



/***/ }),

/***/ "./src/app/layout/home-layout/home-layout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/home-layout/home-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-navbar></app-navbar>\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/home-layout/home-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/home-layout/home-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
    };
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home-layout.component.html */ "./src/app/layout/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/layout/home-layout/home-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/login-layout/login-layout.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/login-layout/login-layout.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container w-50\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/login-layout/login-layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/login-layout/login-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "./src/app/layout/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/layout/login-layout/login-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Detalhes do pedido: {{pedido.numero}}</h3>\n<hr>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <p class=\"card-text\"><b>Data:</b> {{ pedido.data }}</p>\n    <p class=\"card-text\"><b>Status:</b> {{ getStatusNome(pedido.status) }}</p>\n    <p class=\"card-text\"><b>Cliente:</b> {{ pedido.usuarioNome }}</p>\n    <p class=\"card-text\"><b>Entregar em:</b> {{ pedido.enderecoEntrega }}</p>\n    <p class=\"card-text\"><b>Forma de pagamento:</b> {{ getFormaPagamentoNome(pedido.formaPagamento) }}</p>\n    <p class=\"card-text\" *ngIf=\"pedido.formaPagamento == 1\"><b>Troco para:</b> {{ pedido.trocoPara || 0 | currency:'BRL' }}</p>\n    <p class=\"card-text\" *ngIf=\"pedido.formaPagamento == 2\"><b>Cartão:</b> {{ pedido.tipoCartao }}</p>\n    <p class=\"card-text\"><b>Total:</b> {{ pedido.total | currency:'BRL' }}</p>\n\n    <h2>Itens</h2>\n    <div class=\"card-body\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Nome</th>\n            <th>Descrição</th>\n            <th>Quantidade</th>\n            <th>Preço</th>\n            <th>Total</th>\n            <th>Observação</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let produto of produtos | async\">\n            <td>{{ produto.produtoNome }}</td>\n            <td>{{ produto.produtoDescricao }}</td>\n            <td>{{ produto.quantidade }}</td>\n            <td class=\"text-right\">{{ produto.produtoPreco | currency:'BRL' }}</td>\n            <td class=\"text-right\">{{ produto.total | currency:'BRL' }}</td>\n            <td>{{ produto.observacao }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvZGV0YWxoZS1wZWRpZG8vZGV0YWxoZS1wZWRpZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.ts ***!
  \********************************************************************/
/*! exports provided: DetalhePedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePedidoComponent", function() { return DetalhePedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pedido.service */ "./src/app/pedidos/shared/pedido.service.ts");




var DetalhePedidoComponent = /** @class */ (function () {
    function DetalhePedidoComponent(pedidoService, route) {
        this.pedidoService = pedidoService;
        this.route = route;
        this.pedido = {};
    }
    DetalhePedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('key');
        if (key) {
            var subscribe_1 = this.pedidoService.getByKey(key).subscribe(function (pedido) {
                subscribe_1.unsubscribe();
                _this.pedido = pedido;
            });
            this.produtos = this.pedidoService.getAllProdutos(key);
        }
    };
    DetalhePedidoComponent.prototype.getStatusNome = function (status) {
        return this.pedidoService.getStatusNome(status);
    };
    DetalhePedidoComponent.prototype.getFormaPagamentoNome = function (tipoPagamento) {
        return this.pedidoService.getFormaPagamentoNome(tipoPagamento);
    };
    DetalhePedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detalhe-pedido',
            template: __webpack_require__(/*! ./detalhe-pedido.component.html */ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.html"),
            styles: [__webpack_require__(/*! ./detalhe-pedido.component.scss */ "./src/app/pedidos/detalhe-pedido/detalhe-pedido.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_pedido_service__WEBPACK_IMPORTED_MODULE_3__["PedidoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DetalhePedidoComponent);
    return DetalhePedidoComponent;
}());



/***/ }),

/***/ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pedidos/lista-pedidos/lista-pedidos.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Pedidos</h3>\n<hr>\n<div class=\"card\">  \n  <div class=\"card-body\">\n    <table class=\"table grid\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th>Número</th>\n          <th>Data</th>\n          <th>Status</th>\n          <th>Cliente</th>\n          <th>Total</th>\n          <th class=\"text-center\"></th>\n          <th class=\"text-center\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pedido of pedidos | async\" >\n          <th scope=\"row\">{{pedido.key}}</th>\n          <td>{{ pedido.numero }}</td>\n          <td>{{ pedido.data }}</td>\n          <td>{{ getStatusNome(pedido.status) }}</td>\n          <td>{{ pedido.usuarioNome }}</td>\n          <td>{{ pedido.total | currency:'BRL' }}</td>\n          <td class=\"edit\">\n            <a class=\"btn btn-light\" role=\"button\" [routerLink]=\"['/pedidos/detalhe', pedido.key]\"><i class=\"fas fa-info\"></i></a>\n          </td>\n          <td class=\"edit\">\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"setStatusEmPreparacao(pedido)\">\n              <i class=\"far fa-check-circle\"></i> Confirmado\n            </button>\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"setStatusSaiuParaEntrega(pedido)\">\n              <i class=\"fas fa-motorcycle\"></i> Saiu para entrega\n            </button>\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"setStatusEntregue(pedido)\">\n              <i class=\"fas fa-check-circle\"></i> Entregue\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pedidos/lista-pedidos/lista-pedidos.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvbGlzdGEtcGVkaWRvcy9saXN0YS1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pedidos/lista-pedidos/lista-pedidos.component.ts ***!
  \******************************************************************/
/*! exports provided: ListaPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPedidosComponent", function() { return ListaPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pedido.service */ "./src/app/pedidos/shared/pedido.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ListaPedidosComponent = /** @class */ (function () {
    function ListaPedidosComponent(pedidoService, toastr) {
        this.pedidoService = pedidoService;
        this.toastr = toastr;
        this.dashboardMode = false;
    }
    ListaPedidosComponent.prototype.ngOnInit = function () {
        if (this.dashboardMode) {
            this.pedidos = this.pedidoService.getAllAbertos();
        }
        else {
            this.pedidos = this.pedidoService.getAll();
        }
    };
    ListaPedidosComponent.prototype.getStatusNome = function (status) {
        return this.pedidoService.getStatusNome(status);
    };
    ListaPedidosComponent.prototype.setStatusEmPreparacao = function (pedido) {
        this.setStatusPedido(pedido, _shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"].STATUS.EM_PREPARACAO);
    };
    ListaPedidosComponent.prototype.setStatusSaiuParaEntrega = function (pedido) {
        this.setStatusPedido(pedido, _shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"].STATUS.SAIU_PARA_ENTREGA);
    };
    ListaPedidosComponent.prototype.setStatusEntregue = function (pedido) {
        this.setStatusPedido(pedido, _shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"].STATUS.ENTREGUE);
    };
    ListaPedidosComponent.prototype.setStatusPedido = function (pedido, status) {
        this.pedidoService.updateStatus(pedido, status);
        this.toastr.show('Status alterado com sucesso.');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListaPedidosComponent.prototype, "dashboardMode", void 0);
    ListaPedidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-pedidos',
            template: __webpack_require__(/*! ./lista-pedidos.component.html */ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.html"),
            styles: [__webpack_require__(/*! ./lista-pedidos.component.scss */ "./src/app/pedidos/lista-pedidos/lista-pedidos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_pedido_service__WEBPACK_IMPORTED_MODULE_2__["PedidoService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ListaPedidosComponent);
    return ListaPedidosComponent;
}());



/***/ }),

/***/ "./src/app/pedidos/shared/pedido.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pedidos/shared/pedido.service.ts ***!
  \**************************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/shared/firebase-path */ "./src/app/core/shared/firebase-path.ts");





var PedidoService = /** @class */ (function () {
    function PedidoService(db) {
        this.db = db;
    }
    PedidoService_1 = PedidoService;
    PedidoService.prototype.getByKey = function (key) {
        var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS + key;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) {
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: change.key }, change.payload.val()));
        }));
    };
    PedidoService.prototype.getAll = function () {
        return this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS, function (q) { return q.orderByChild('data'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: m.payload.key }, m.payload.val())); });
        }));
    };
    PedidoService.prototype.getAllAbertos = function () {
        return this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS, function (q) { return q.orderByChild('status').endAt(PedidoService_1.STATUS.SAIU_PARA_ENTREGA); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: m.payload.key }, m.payload.val())); });
        }));
    };
    PedidoService.prototype.getStatusNome = function (status) {
        switch (status) {
            case PedidoService_1.STATUS.AGUARDANDO_CONFIRMACAO:
                return 'Aguardando confirmação';
            case PedidoService_1.STATUS.EM_PREPARACAO:
                return 'Em preparação';
            case PedidoService_1.STATUS.SAIU_PARA_ENTREGA:
                return 'Saiu para entrega';
            case PedidoService_1.STATUS.ENTREGUE:
                return 'Entregue';
        }
    };
    PedidoService.prototype.getFormaPagamentoNome = function (paymentType) {
        switch (paymentType) {
            case PedidoService_1.TIPO_FORMA_PAGAMENTO.DINHEIRO:
                return 'Dinheiro';
            case PedidoService_1.TIPO_FORMA_PAGAMENTO.CARTAO:
                return 'Cartão de crédito/débido';
        }
    };
    PedidoService.prototype.updateStatus = function (pedido, novoStatus) {
        this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS)
            .update(pedido.key, {
            status: novoStatus,
            usuarioStatus: pedido.usuarioKey + '_' + novoStatus
        });
    };
    PedidoService.prototype.getAllProdutos = function (key) {
        var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS_PRODUTOS + key;
        return this.db.list(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: m.payload.key }, m.payload.val())); });
        }));
    };
    PedidoService.prototype.getTotalAguardandoConfirmacao = function () {
        return this.getTotalPorStatus(PedidoService_1.STATUS.AGUARDANDO_CONFIRMACAO);
    };
    PedidoService.prototype.getTotalEmPreparacao = function () {
        return this.getTotalPorStatus(PedidoService_1.STATUS.EM_PREPARACAO);
    };
    PedidoService.prototype.getTotalSaiuParaEntrega = function () {
        return this.getTotalPorStatus(PedidoService_1.STATUS.SAIU_PARA_ENTREGA);
    };
    PedidoService.prototype.getTotalEntregue = function () {
        return this.getTotalPorStatus(PedidoService_1.STATUS.ENTREGUE);
    };
    PedidoService.prototype.getTotalPorStatus = function (status) {
        return this.db.list(_core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_4__["FirebasePath"].PEDIDOS, function (q) { return q.orderByChild('status').equalTo(status); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.length;
        }));
    };
    var PedidoService_1;
    PedidoService.TIPO_FORMA_PAGAMENTO = {
        DINHEIRO: 1,
        CARTAO: 2
    };
    PedidoService.STATUS = {
        AGUARDANDO_CONFIRMACAO: 0,
        EM_PREPARACAO: 1,
        SAIU_PARA_ENTREGA: 2,
        ENTREGUE: 3
    };
    PedidoService = PedidoService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], PedidoService);
    return PedidoService;
}());



/***/ }),

/***/ "./src/app/produtos/form-produtos/form-produtos.component.css":
/*!********************************************************************!*\
  !*** ./src/app/produtos/form-produtos/form-produtos.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zL2Zvcm0tcHJvZHV0b3MvZm9ybS1wcm9kdXRvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/produtos/form-produtos/form-produtos.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/produtos/form-produtos/form-produtos.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Novo Jornal</h3>\r\n<hr>\r\n<form [formGroup]=\"formProduto\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"nome\">Nome</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" formControlName=\"nome\">\r\n  </div>\r\n  <div *ngIf=\"nome.invalid && (nome.dirty || nome.touched)\" class=\"alert alert-danger\">\r\n    <div *ngIf=\"nome.errors?.required\">\r\n      O nome é obrigatório.\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"edicao\">Descrição</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"descricao\" placeholder=\"Descrição do Jornal\" formControlName=\"descricao\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"edicao\">Edição</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"edicao\" placeholder=\"Edição do Jornal\" formControlName=\"edicao\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"ano\">Ano</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"ano\" placeholder=\"Ano do Jornal\" formControlName=\"ano\">\r\n  </div>\r\n\r\n  <!-- O controle abaixo é para fazer upload do arquivo -->\r\n  <div class=\"form-group\" *ngIf=\"imgUrl == ''\">\r\n      <label class=\"form-control-label\">Foto/Imagem</label>\r\n     <input type=\"file\" class=\"form-control\" accept=\"image/pdf\" (change)=\"upload($event)\" formControlName=\"img\" />\r\n   </div>\r\n\r\n   <!-- A div abaixo é para exibir a imagem do produto -->\r\n    <div class=\"form-group\" *ngIf=\"imgUrl != ''\">\r\n     <img [src]=\"imgUrl\" class=\"img-thumbnail d-block\" style=\"max-width: 100px;\">\r\n     <button class=\"btn btn-danger mt-2\" type=\"button\" (click)=\"removerImg()\">\r\n        Remover imagem\r\n      </button>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\">Salvar</button>\r\n  <a class=\"btn btn-secondary ml-2\" [routerLink]=\"['/produtos']\">Voltar</a>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/produtos/form-produtos/form-produtos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/produtos/form-produtos/form-produtos.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProdutosComponent", function() { return FormProdutosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/produtos.service */ "./src/app/produtos/shared/produtos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



// import { CategoriasService } from '../../categorias/shared/categorias.service';



var FormProdutosComponent = /** @class */ (function () {
    function FormProdutosComponent(formBuilder, route, 
    // private categoriasService: CategoriasService,
    produtosService, toastr, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.produtosService = produtosService;
        this.toastr = toastr;
        this.router = router;
        this.file = null;
        this.imgUrl = '';
        this.filePath = '';
    }
    FormProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.criarFormulario();
        // this.categorias = this.categoriasService.getAll();
        this.key = this.route.snapshot.paramMap.get('key');
        if (this.key) {
            var subscribe_1 = this.produtosService.getByKey(this.key)
                .subscribe(function (produtos) {
                subscribe_1.unsubscribe();
                _this.formProduto.setValue({
                    nome: produtos.nome,
                    edicao: produtos.edicao,
                    ano: produtos.ano,
                    descricao: produtos.descricao,
                    img: ''
                });
                _this.imgUrl = produtos.img || '';
                _this.filePath = produtos.filePath || '';
            });
        }
    };
    Object.defineProperty(FormProdutosComponent.prototype, "nome", {
        get: function () { return this.formProduto.get('nome'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProdutosComponent.prototype, "ano", {
        get: function () { return this.formProduto.get('ano'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProdutosComponent.prototype, "edicao", {
        get: function () { return this.formProduto.get('edicao'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProdutosComponent.prototype, "descricao", {
        get: function () { return this.formProduto.get('descricao'); },
        enumerable: true,
        configurable: true
    });
    FormProdutosComponent.prototype.criarFormulario = function () {
        this.key = null;
        this.formProduto = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            edicao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ano: [''],
            descricao: [''],
            img: ['']
        });
        this.file = null;
        this.imgUrl = '';
        this.filePath = '';
    };
    FormProdutosComponent.prototype.upload = function (event) {
        if (event.target.files.length) {
            this.file = event.target.files[0];
        }
        else {
            this.file = null;
        }
    };
    FormProdutosComponent.prototype.removerImg = function () {
        this.produtosService.removeImg(this.filePath, this.key);
        this.imgUrl = '';
        this.filePath = '';
    };
    // setCategoriaNome(categorias: any) {
    //   if (categorias && this.formProduto.value.categoriaKey) {
    //     const categoriaNome = categorias[0].text;
    //     this.nome.setValue(categoriaNome);
    //     this.formProduto.value.categoriaNome.setValue();
    //   } else {
    //     this.nome.setValue('');
    //   }
    // }
    FormProdutosComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formProduto.valid) {
            var result = void 0;
            if (this.key) {
                result = this.produtosService.update(this.formProduto.value, this.key);
            }
            else {
                result = this.produtosService.insert(this.formProduto.value);
            }
            if (this.file) {
                result.then(function (key) {
                    _this.produtosService.uploadImg(key, _this.file);
                    _this.criarFormulario();
                });
            }
            else {
                this.criarFormulario();
            }
            this.router.navigate(['produtos']);
            this.toastr.success('Jornal salvo com sucesso!!!');
        }
    };
    FormProdutosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-form-produtos',
            template: __webpack_require__(/*! ./form-produtos.component.html */ "./src/app/produtos/form-produtos/form-produtos.component.html"),
            styles: [__webpack_require__(/*! ./form-produtos.component.css */ "./src/app/produtos/form-produtos/form-produtos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _shared_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FormProdutosComponent);
    return FormProdutosComponent;
}());



/***/ }),

/***/ "./src/app/produtos/lista-produtos/lista-produtos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/produtos/lista-produtos/lista-produtos.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zL2xpc3RhLXByb2R1dG9zL2xpc3RhLXByb2R1dG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/produtos/lista-produtos/lista-produtos.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/produtos/lista-produtos/lista-produtos.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>JAV</h3>\r\n<hr>\r\n<div class=\"card\">\r\n  <div class=\"card-header text-right\">\r\n    <a class=\"btn btn-primary\" role=\"button\" [routerLink]=\"['/produtos/novo']\">Novo Jornal</a>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <table class=\"table grid\">\r\n      <thead>\r\n        <tr>\r\n          <!-- <th scope=\"col\">#</th> -->\r\n          <th scope=\"col\">Título</th>\r\n          <th scope=\"col\">Edição</th>\r\n          <th scope=\"col\">Ano</th>\r\n          <th scope=\"col\">Descrição</th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let produto of produtos | async\">\r\n          <!-- <th scope=\"row\">{{produto.key}}</th> -->\r\n          <td>{{ produto.nome }}</td>\r\n          <td>{{ produto.edicao }}</td>\r\n          <td>{{ produto.ano }}</td>\r\n          <td>{{ produto.descricao }}</td>\r\n          <td>\r\n            <img [src]=\"produto.img\" class=\"img-thumbnail\" style=\"max-width: 50px;\" [hidden]=\"!produto.img\" />\r\n          </td>\r\n          <td class=\"edit\">\r\n            <a class=\"btn btn-warning text-white\" role=\"button\" [routerLink]=\"['/produtos/editar', produto.key]\"><i class=\"far fa-edit\"></i>Editar</a>\r\n          </td>\r\n          <td class=\"delete\">\r\n            <button class=\"btn btn-danger\" (click)=\"remover(produto.key, produto.filePath)\"><i class=\"far fa-trash-alt\"></i>Excluir</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/produtos/lista-produtos/lista-produtos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/produtos/lista-produtos/lista-produtos.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListaProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProdutosComponent", function() { return ListaProdutosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/produtos.service */ "./src/app/produtos/shared/produtos.service.ts");



var ListaProdutosComponent = /** @class */ (function () {
    function ListaProdutosComponent(produtoService) {
        this.produtoService = produtoService;
    }
    ListaProdutosComponent.prototype.ngOnInit = function () {
        this.produtos = this.produtoService.getAll();
    };
    ListaProdutosComponent.prototype.remover = function (key, filePath) {
        this.produtoService.remove(key, filePath);
    };
    ListaProdutosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-produtos',
            template: __webpack_require__(/*! ./lista-produtos.component.html */ "./src/app/produtos/lista-produtos/lista-produtos.component.html"),
            styles: [__webpack_require__(/*! ./lista-produtos.component.css */ "./src/app/produtos/lista-produtos/lista-produtos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_produtos_service__WEBPACK_IMPORTED_MODULE_2__["ProdutosService"]])
    ], ListaProdutosComponent);
    return ListaProdutosComponent;
}());



/***/ }),

/***/ "./src/app/produtos/shared/produtos.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/produtos/shared/produtos.service.ts ***!
  \*****************************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var ProdutosService = /** @class */ (function () {
    function ProdutosService(db, storage) {
        this.db = db;
        this.storage = storage;
        this.produtosRef = this.db.list('produtos/');
    }
    ProdutosService.prototype.insert = function (produto) {
        // return this.produtosRef.push(produto);
        return this.save(produto, null);
    };
    ProdutosService.prototype.update = function (produto, key) {
        // return this.produtosRef.update(key, produto);
        return this.save(produto, key);
    };
    ProdutosService.prototype.save = function (produto, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var produtoRef = {
                nome: produto.nome,
                edicao: produto.edicao,
                ano: produto.ano,
                descricao: produto.descricao,
            };
            if (key) {
                _this.produtosRef.update(key, produtoRef)
                    .then(function () { return resolve(key); })
                    .catch(function () { return reject(); });
            }
            else {
                _this.produtosRef.push(produtoRef)
                    .then(function (result) { return resolve(result.key); });
            }
        });
    };
    ProdutosService.prototype.getAll = function () {
        return this.produtosRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (m) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: m.payload.key }, m.payload.val())); });
        }));
    };
    ProdutosService.prototype.getByKey = function (key) {
        var path = 'produtos/' + key;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) {
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: change.key }, change.payload.val()));
        }));
    };
    ProdutosService.prototype.remover = function (key, filePath) {
        this.produtosRef.remove(key);
        if (filePath) {
            this.removeImg(filePath, key, false);
        }
    };
    ProdutosService.prototype.uploadImg = function (key, file) {
        var _this = this;
        var filePath = 'produtos/' + key;
        var ref = this.storage.ref(filePath);
        var task = ref.put(file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            ref.getDownloadURL().subscribe(function (url) {
                _this.produtosRef.update(key, { img: url, filePath: filePath });
            });
        })).subscribe();
    };
    ProdutosService.prototype.removerImg = function (filePath, key, atualizarProduto) {
        if (atualizarProduto === void 0) { atualizarProduto = true; }
        var ref = this.storage.ref(filePath);
        ref.delete();
        if (atualizarProduto) {
            this.produtosRef.update(key, { img: '', filePath: '' });
        }
    };
    ProdutosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], ProdutosService);
    return ProdutosService;
}());



/***/ }),

/***/ "./src/app/usuarios/criar-conta/criar-conta.component.css":
/*!****************************************************************!*\
  !*** ./src/app/usuarios/criar-conta/criar-conta.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL2NyaWFyLWNvbnRhL2NyaWFyLWNvbnRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/usuarios/criar-conta/criar-conta.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/usuarios/criar-conta/criar-conta.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-login mx-auto mt-5\">\r\n  <div class=\"card-header\">Criar conta</div>\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"formCriarConta\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"nome\">Nome</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" formControlName=\"nome\" required>\r\n      </div>\r\n      <div *ngIf=\"nome.invalid && (nome.dirty || nome.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nome.errors.required\">\r\n          O nome é obrigatório.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-mail</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\" formControlName=\"email\" required>\r\n      </div>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          O e-mail é obrigatório.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          O e-mail é inválido.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"senha\">Senha</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"senha\" placeholder=\"Senha\" formControlName=\"senha\" required>\r\n      </div>\r\n      <div *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"senha.errors.required\">\r\n          A senha é obrigatório.\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Criar conta</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuarios/criar-conta/criar-conta.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/usuarios/criar-conta/criar-conta.component.ts ***!
  \***************************************************************/
/*! exports provided: CriarContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarContaComponent", function() { return CriarContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CriarContaComponent = /** @class */ (function () {
    function CriarContaComponent(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    CriarContaComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
    };
    Object.defineProperty(CriarContaComponent.prototype, "nome", {
        get: function () { return this.formCriarConta.get('nome'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriarContaComponent.prototype, "email", {
        get: function () { return this.formCriarConta.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CriarContaComponent.prototype, "senha", {
        get: function () { return this.formCriarConta.get('senha'); },
        enumerable: true,
        configurable: true
    });
    CriarContaComponent.prototype.criarFormulario = function () {
        this.formCriarConta = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CriarContaComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formCriarConta.valid) {
            this.usuarioService.criarConta(this.formCriarConta.value)
                .then(function () {
                _this.toast.success('Sua conta foi criada com sucesso.');
                _this.router.navigate(['/login']);
            })
                .catch(function (mensagem) {
                _this.toast.error(mensagem);
            });
        }
    };
    CriarContaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-criar-conta',
            template: __webpack_require__(/*! ./criar-conta.component.html */ "./src/app/usuarios/criar-conta/criar-conta.component.html"),
            styles: [__webpack_require__(/*! ./criar-conta.component.css */ "./src/app/usuarios/criar-conta/criar-conta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CriarContaComponent);
    return CriarContaComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.css":
/*!********************************************************************!*\
  !*** ./src/app/usuarios/esqueci-senha/esqueci-senha.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL2VzcXVlY2ktc2VuaGEvZXNxdWVjaS1zZW5oYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/usuarios/esqueci-senha/esqueci-senha.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-login mx-auto mt-5\">\r\n  <div class=\"card-header\">Recuperar senha</div>\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"formEsqueciSenha\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-mail</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\r\n      </div>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          O e-mail é obrigatório.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          O e-mail é inválido.\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Enviar e-mail</button>\r\n    </form>\r\n    <div class=\"text-center\">\r\n      <a class=\"d-block small mt-3\" [routerLink]=\"['/login']\">Entrar</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/usuarios/esqueci-senha/esqueci-senha.component.ts ***!
  \*******************************************************************/
/*! exports provided: EsqueciSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciSenhaComponent", function() { return EsqueciSenhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var EsqueciSenhaComponent = /** @class */ (function () {
    function EsqueciSenhaComponent(formBuilder, usuarioService, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.toast = toast;
    }
    EsqueciSenhaComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
    };
    Object.defineProperty(EsqueciSenhaComponent.prototype, "email", {
        get: function () { return this.formEsqueciSenha.get('email'); },
        enumerable: true,
        configurable: true
    });
    EsqueciSenhaComponent.prototype.criarFormulario = function () {
        this.formEsqueciSenha = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    EsqueciSenhaComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formEsqueciSenha.valid) {
            this.usuarioService.enviarEmailResetarSenha(this.formEsqueciSenha.value.email)
                .then(function () {
                _this.toast.success('E-mail enviado com sucesso');
            })
                .catch(function (mensagem) {
                _this.toast.error(mensagem);
            });
        }
    };
    EsqueciSenhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-esqueci-senha',
            template: __webpack_require__(/*! ./esqueci-senha.component.html */ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.html"),
            styles: [__webpack_require__(/*! ./esqueci-senha.component.css */ "./src/app/usuarios/esqueci-senha/esqueci-senha.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EsqueciSenhaComponent);
    return EsqueciSenhaComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/usuarios/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/usuarios/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-login mx-auto mt-5\">\r\n  <div class=\"card-header\">Login</div>\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-mail</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\" formControlName=\"email\">\r\n      </div>\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          O e-mail é obrigatório.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          O e-mail é inválido.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"senha\">Senha</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"senha\" placeholder=\"Senha\" formControlName=\"senha\">\r\n      </div>\r\n      <div *ngIf=\"senha.invalid && (senha.dirty || senha.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"senha.errors.required\">\r\n          A senha é obrigatório.\r\n        </div>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Entrar</button>\r\n    </form>\r\n    <div class=\"text-center\">\r\n      <a class=\"d-block small mt-3\" [routerLink]=\"['/criar-conta']\">Criar conta</a>\r\n      <a class=\"d-block small\" [routerLink]=\"['/esqueci-senha']\">Esqueci minha senha</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuarios/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/usuarios/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, usuarioService, router, toast) {
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toast = toast;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.criarFormulario();
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.formLogin.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "senha", {
        get: function () { return this.formLogin.get('senha'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.criarFormulario = function () {
        this.formLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formLogin.valid) {
            this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
                .then(function () {
                _this.router.navigate(['/dashboard']);
            })
                .catch(function (mensagem) {
                _this.toast.error(mensagem);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/usuarios/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/usuarios/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/shared/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/usuarios/shared/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (usuarioLogado) {
            if (!usuarioLogado) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/usuarios/shared/usuario.service.ts":
/*!****************************************************!*\
  !*** ./src/app/usuarios/shared/usuario.service.ts ***!
  \****************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/shared/firebase-path */ "./src/app/core/shared/firebase-path.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UsuarioService = /** @class */ (function () {
    function UsuarioService(afAuth, db, storage) {
        this.afAuth = afAuth;
        this.db = db;
        this.storage = storage;
    }
    UsuarioService.prototype.criarConta = function (usuario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
                .then(function (userCredential) {
                userCredential.user.updateProfile({ displayName: usuario.nome, photoURL: '' });
                userCredential.user.sendEmailVerification();
                _this.logout();
                resolve();
            })
                .catch(function (error) {
                reject(_this.handlerError(error));
            });
        });
    };
    UsuarioService.prototype.login = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, senha)
                .then(function (userCredential) {
                if (userCredential.user.emailVerified) {
                    resolve();
                }
                else {
                    _this.logout();
                    reject('Seu e-mail ainda não foi verificado. Por favor verifique seu e-mail.');
                }
            })
                .catch(function (error) {
                reject(_this.handlerError(error));
            });
        });
    };
    UsuarioService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    UsuarioService.prototype.enviarEmailResetarSenha = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.sendPasswordResetEmail(email)
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(_this.handlerError(error));
            });
        });
    };
    UsuarioService.prototype.handlerError = function (error) {
        var mensagem = '';
        if (error.code == 'auth/email-already-in-use') {
            mensagem = 'O e-mail informado já está sendo usado.';
        }
        else if (error.code == 'auth/invalid-email') {
            mensagem = 'O e-mail informado é inválido.';
        }
        else if (error.code == 'auth/operation-not-allowed') {
            mensagem = 'A autenticação por email e senha não está habilitada';
        }
        else if (error.code == 'auth/weak-password') {
            mensagem = 'A senha utilizada é muito fraca. Por favor escolha outra senha.';
        }
        else if (error.code == 'auth/user-disabled') {
            mensagem = 'O usuário está desabilitado, por favor contact o administrador.';
        }
        else if (error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
            mensagem = 'O usuario/senha inválido(s)';
        }
        return mensagem;
    };
    UsuarioService.prototype.getDadosUsuario = function () {
        var _this = this;
        var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__["FirebasePath"].USUARIOS + this.afAuth.auth.currentUser.uid;
        return this.db.object(path).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (change) {
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: change.key, nome: _this.afAuth.auth.currentUser.displayName }, change.payload.val()));
        }));
    };
    UsuarioService.prototype.updateProfile = function (values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.currentUser.updateProfile({ displayName: values.nome, photoURL: _this.afAuth.auth.currentUser.photoURL });
            var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__["FirebasePath"].USUARIOS + _this.afAuth.auth.currentUser.uid;
            _this.db.object(path).update({ telefone: values.telefone, cpf: values.cpf })
                .then(function () { return resolve(); })
                .catch(function () { return reject(); });
        });
    };
    UsuarioService.prototype.uploadImg = function (file) {
        var _this = this;
        return new Promise(function (resolve) {
            var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__["FirebasePath"].USUARIOS + _this.afAuth.auth.currentUser.uid;
            var filePath = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__["FirebasePath"].USUARIOS + _this.afAuth.auth.currentUser.uid + "/" + file.name;
            var ref = _this.storage.ref(filePath);
            var task = ref.put(file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                ref.getDownloadURL().subscribe((function (url) {
                    _this.db.object(path).update({ img: url, filePath: filePath });
                    _this.afAuth.auth.currentUser.updateProfile({ displayName: _this.afAuth.auth.currentUser.displayName, photoURL: url });
                    resolve();
                }));
            })).subscribe();
        });
    };
    UsuarioService.prototype.removeImg = function (filePath) {
        var path = "" + _core_shared_firebase_path__WEBPACK_IMPORTED_MODULE_1__["FirebasePath"].USUARIOS + this.afAuth.auth.currentUser.uid;
        var ref = this.storage.ref(filePath);
        ref.delete();
        this.db.object(path).update({ img: '', filePath: '' });
        this.afAuth.auth.currentUser.updateProfile({ displayName: this.afAuth.auth.currentUser.displayName, photoURL: null });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var src_firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/firebase-config */ "./src/firebase-config.ts");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: src_firebase_config__WEBPACK_IMPORTED_MODULE_0__["firebaseconfig"]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/firebase-config.ts":
/*!********************************!*\
  !*** ./src/firebase-config.ts ***!
  \********************************/
/*! exports provided: firebaseconfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseconfig", function() { return firebaseconfig; });
var firebaseconfig = {
    apiKey: 'AIzaSyD9borxlgwkWpIOQvwzEzdTBWPeEPDb4C8',
    authDomain: 'java-2c9a9.firebaseapp.com',
    databaseURL: 'https://java-2c9a9.firebaseio.com',
    projectId: 'java-2c9a9',
    storageBucket: 'java-2c9a9.appspot.com',
    messagingSenderId: '33002697561',
    appId: '1:33002697561:web:60c6d4f06a3cd7f332d248',
    measurementId: 'G-T4KWQBGJCD'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gabriel.mandrade1\dev\deliveryweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map