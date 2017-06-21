import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { SensoresComponent } from './sensores/sensores.component';
import { ZonasComponent } from './zonas/zonas.component';
import { AuthGuard } from './auth.guard';

export const MODULE_ROUTES: Route[] =[
    //{ path: 'dashboard', component: HomeComponent },
    //{ path: 'maps', component: MapsComponent },
    { path: 'Ciudades', component: CiudadesComponent },
    //{ path: 'TipoSensores', component: TipoSensoresComponent },
    //{ path: 'Sensores', component: SensoresComponent },
    { path: 'Zonas', component: ZonasComponent },
    //{ path: 'Eventos', component: EventosComponent },
    //{ path: 'notifications', component: NotificationsComponent },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'user', component: UserComponent },
    //{ path: 'table', component: TableComponent },
    //{ path: 'icons', component: IconsComponent },
    //{ path: 'typography', component: TypographyComponent },
    //{ path: 'upgrade', component: UpgradeComponent },
    { path: '', redirectTo: 'Ciudades', pathMatch: 'full' }
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    TableComponent,
    IconsComponent,
    TypographyComponent,
    UpgradeComponent,
    CiudadesComponent,
    SensoresComponent,
    ZonasComponent
]
