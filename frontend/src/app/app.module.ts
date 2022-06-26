import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./components/home/home.component";
import { ENDPOINT_URL } from "./providers/tokens";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        HomeComponent,
    ],
    providers: [{ provide: ENDPOINT_URL, useValue: "./" }],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
