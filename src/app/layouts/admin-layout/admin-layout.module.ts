import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { FormsComponent }           from '../../pages/forms/forms.component';
import { RegisterComponent}         from '../../pages/register/register.component';
import { LoginComponent }           from '../../pages/login/login.component';
import { NewsComponent }            from '../../pages/news/news.component';
import { CategoryComponent }        from '../../pages/category/category.component';
import { OffersComponent }          from '../../pages/offers/offers.component';
import { BannerComponent }          from '../../pages/banner/banner.component';
import { EventsComponent }          from '../../pages/events/events.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    CategoryComponent,
    OffersComponent,
    BannerComponent,
    EventsComponent,
  ]
})

export class AdminLayoutModule {}
