"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var dashboard_routes_1 = require('./dashboard.routes');
var ciudad_1 = require('./ciudades/ciudad');
var sensor_1 = require('./sensores/sensor');
var zona_1 = require('./zonas/zona');
var ciudades_service_1 = require('./ciudades/ciudades.service');
var sensores_service_1 = require('./sensores/sensores.service');
var zonas_service_1 = require('./zonas/zonas.service');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var memoria_service_1 = require('./ciudades/memoria.service');
var auth_guard_1 = require('./auth.guard');
var authentication_service_1 = require('./authentication.service');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(memoria_service_1.MemoriaService) //comentar esta linea para desactivar la parte de memoria.
            ],
            declarations: [dashboard_routes_1.MODULE_COMPONENTS],
            providers: [ciudades_service_1.CiudadesService,
                sensores_service_1.SensoresService,
                zonas_service_1.ZonasService,
                ciudad_1.Ciudad,
                sensor_1.Sensor,
                zona_1.Zona,
                auth_guard_1.AuthGuard,
                authentication_service_1.AuthenticationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map