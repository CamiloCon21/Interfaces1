
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';




const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: '**', redirectTo: 'inicio' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
