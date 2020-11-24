import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',           title: 'Dashboard',           icon:'ni-tv-2 text-primary',          class: '' },
    { path: '/register',            title: 'Register',            icon:'ni-key-25 text-info',           class: '' },
    { path: '/banner',              title: 'Products',             icon:'ni-circle-08 text-pink',        class: '' },
    { path: '/city',                title: 'City',                icon:'ni-circle-08 text-pink',        class: '' },
    { path: '/state',               title: 'State',               icon:'ni-circle-08 text-pink',        class: '' },
    { path: '/table',               title: 'Customers',               icon:'ni-circle-08 text-pink',        class: '' },
    { path: '/market',               title: 'Market',               icon:'ni-circle-08 text-pink',        class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
