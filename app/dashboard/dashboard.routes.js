"use strict";
var home_component_1 = require('./home/home.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var typography_component_1 = require('./typography/typography.component');
var upgrade_component_1 = require('./upgrade/upgrade.component');
var ciudades_component_1 = require('./ciudades/ciudades.component');
var sensores_component_1 = require('./sensores/sensores.component');
var zonas_component_1 = require('./zonas/zonas.component');
exports.MODULE_ROUTES = [
    //{ path: 'dashboard', component: HomeComponent },
    //{ path: 'maps', component: MapsComponent },
    { path: 'Ciudades', component: ciudades_component_1.CiudadesComponent },
    //{ path: 'TipoSensores', component: TipoSensoresComponent },
    //{ path: 'Sensores', component: SensoresComponent },
    { path: 'Zonas', component: zonas_component_1.ZonasComponent },
    //{ path: 'Eventos', component: EventosComponent },
    //{ path: 'notifications', component: NotificationsComponent },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'user', component: UserComponent },
    //{ path: 'table', component: TableComponent },
    //{ path: 'icons', component: IconsComponent },
    //{ path: 'typography', component: TypographyComponent },
    //{ path: 'upgrade', component: UpgradeComponent },
    { path: '', redirectTo: 'Ciudades', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    typography_component_1.TypographyComponent,
    upgrade_component_1.UpgradeComponent,
    ciudades_component_1.CiudadesComponent,
    sensores_component_1.SensoresComponent,
    zonas_component_1.ZonasComponent
];
//# sourceMappingURL=dashboard.routes.js.map