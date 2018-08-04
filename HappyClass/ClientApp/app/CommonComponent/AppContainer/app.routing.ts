import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { FullLayoutComponent } from './FullLayout/full-layout.component';
import { SimpleLayoutComponent } from './SimpleLayout/simple-layout.component';
import { LoginComponent } from '../../components/Account/login/login.component';
import { HomeComponent } from '../../components/home/home.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { FetchDataComponent } from '../../components/fetchdata/fetchdata.component';
import { RegisterComponent } from '../../components/Account/register/register.component';

// Import Containers

export const routes: Routes = [
    {
        path: '',
        //redirectTo: 'dashboard',
        redirectTo: 'account/login',
        pathMatch: 'full',
    },
    {
        path: 'index',
        //redirectTo: 'dashboard',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'account',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'app-login', component: LoginComponent },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, RouterLinkActive]
})
export class AppRoutingModule { }
