import { Routes } from '@angular/router';
import { ListDevoteeComponent } from '../components/list-devotee/list-devotee.component';
import { CreateDevoteeComponent } from '../components/create-devotee/create-devotee.component';

export const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component:CreateDevoteeComponent},
    {path: 'create', component: ListDevoteeComponent}
];
