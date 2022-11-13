import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";

import { PageNotFoundComponent } from "app/components/page-not-found/page-not-found.component";
import { SoftDashboardComponent } from "app/soft-dashboard/soft-dashboard.component";
import { IntegrationComponent } from "app/integration/integration.component";
import { UsersComponent } from "app/users/users.component";

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent },
  // { path: "user-profile", component: UserProfileComponent },
  { path: "application", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "softwareDashboard", component: SoftDashboardComponent },
  { path: "userdetail", component:  PageNotFoundComponent },

  { path: "expenses", component: PageNotFoundComponent },
  { path: "insight", component: PageNotFoundComponent },

  { path: "user", component: UsersComponent },

  { path: "renewal", component: PageNotFoundComponent },
  { path: "automation", component: PageNotFoundComponent },
  { path: "security", component: PageNotFoundComponent },
  { path: "reports", component: PageNotFoundComponent },
  { path: "integration", component: IntegrationComponent },
  { path: "setting", component: PageNotFoundComponent },
];
