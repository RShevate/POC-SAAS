import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { SoftDashboardComponent } from "./soft-dashboard/soft-dashboard.component";
import { IntegrationComponent } from "./integration/integration.component";
import { UsersComponent } from "./users/users.component";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SoftDashboardComponent,
    IntegrationComponent,
    UsersComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
