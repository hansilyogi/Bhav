import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'ni-tv-2 text-primary',          class: '' },
    { path: '/user',          title: 'User Profile',      icon:'ni-single-02 text-yellow',      class: '' },
    { path: '/table',         title: 'Table List',        icon:'ni-bullet-list-67 text-red',    class: '' },
    { path: '/login',         title: 'Login',             icon:'ni-key-25 text-info',           class: '' },
    { path: '/register',      title: 'Register',          icon:'ni-key-25 text-info',           class: '' },
    { path: '/forms',         title: 'Form',              icon:'ni-circle-08 text-pink',        class: '' },
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