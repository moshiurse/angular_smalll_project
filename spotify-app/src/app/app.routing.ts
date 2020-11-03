import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { SearchComponent } from "./components/search/search.component";

const appRoutes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }