import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }         from '../../pages/dashboard/dashboard.component';
import { RegisterComponent}           from '../../pages/register/register.component';
import { BannerComponent }            from '../../pages/banner/banner.component';
import { CityComponent }              from '../../pages/city/city.component';
import { StateComponent }              from '../../pages/state/state.component';
import { TableComponent }              from '../../pages/table/table.component';
import { MarketComponent }             from '../../pages/market/market.component';
import { LoginComponent }              from'../../pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RichTextEditorAllModule
  ],
  declarations: [
    DashboardComponent,
    RegisterComponent,
    BannerComponent,
    CityComponent,
    StateComponent,
    MarketComponent,
    LoginComponent,
    TableComponent,
  ]
})

export class AdminLayoutModule {}
