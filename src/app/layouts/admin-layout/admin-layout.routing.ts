import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { BannerComponent } from 'app/pages/banner/banner.component';
import { CityComponent } from 'app/pages/city/city.component';
import { StateComponent } from 'app/pages/state/state.component';
import { TableComponent } from 'app/pages/table/table.component';
import { MarketComponent } from 'app/pages/market/market.component';
import { LoginComponent } from 'app/pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'banner',         component: BannerComponent },
    { path: 'city',         component: CityComponent },
    { path: 'state',         component: StateComponent },
    { path: 'table',         component: TableComponent },
    { path: 'market',         component: MarketComponent },
    { path: 'login',         component: LoginComponent },
];
