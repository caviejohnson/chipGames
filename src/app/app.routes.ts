import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhichIsBiggerComponent } from './games/which-is-bigger/which-is-bigger.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'games/which', component: WhichIsBiggerComponent}
];
