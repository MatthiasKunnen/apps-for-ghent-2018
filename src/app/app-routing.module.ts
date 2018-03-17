import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pol/start/start.component';
import { NavigationComponent } from './pol/navigation/navigation.component';

const routes: Routes = [
    {path: 'start', component: StartComponent},
    {path: 'navigation', component: NavigationComponent},    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
