import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UploadDataComponent } from './component/upload-data/upload-data.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'upload', component: UploadDataComponent },
    { path: '**', component: HomeComponent },
];

export const appRouterModule = RouterModule.forRoot(routes);
