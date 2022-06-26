import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/login/login.component";

import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./providers/auth.guard";

const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "home", component: HomeComponent, canActivate: [AuthGuard] },
	// TODO: The following :D
	{ path: "game", component: HomeComponent },
	{ path: "history", component: HomeComponent },
	{ path: "groups", component: HomeComponent },
	{ path: "options", component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
