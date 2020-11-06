import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { FormsComponent } from '../../pages/forms/forms.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { LoginComponent } from '../../pages/login/login.component';
import { NewsComponent } from 'app/pages/news/news.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { OffersComponent } from 'app/pages/offers/offers.component';
import { BannerComponent } from 'app/pages/banner/banner.component';
import { EventsComponent } from 'app/pages/events/events.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'forms',          component: FormsComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'news',           component: NewsComponent },
    { path: 'category',       component: CategoryComponent },
    { path: 'offers',         component: OffersComponent },
    { path: 'banner',         component: BannerComponent },
    { path: 'events',         component: EventsComponent },
];
