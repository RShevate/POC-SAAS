import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "dashboard",
    class: "",
  },
  {
    path: "/insight",
    title: "Insight",
    icon: "bar_chart",
    class: "",
  },
  {
    path: "/application",
    title: "Application",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/licenses",
    title: "Licenses",
    icon: "folder",
    class: "",
  },
  {
    path: "/user",
    title: "Users",
    icon: "people",
    class: "",
  },
  {
    path: "/expenses",
    title: "Expenses",
    icon: "attach_money",
    class: "",
  },
  {
    path: "/renewal",
    title: "Renewals",
    icon: "autorenew",
    class: "",
  },
  {
    path: "/automation",
    title: "Automation",
    icon: "all_inclusive",
    class: "",
    // children: [
    //   {
    //     path: "/",
    //     title: "Hello",
    //     icon: "people",
    //     class: "",
    //   },
    // ]
  },
  {
    path: "/security",
    title: "Security",
    icon: "security",
    class: "",
  },
  {
    path: "/reports",
    title: "Reports",
    icon: "assignment",
    class: "",
  },

  {
    path: "/maps",
    title: "Integration",
    icon: "add_box",
    class: "",
  },
  {
    path: "/setting",
    title: "Settings",
    icon: "settings",
    class: "",
  },
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },

  // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
