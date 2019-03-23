import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserdetailsComponent  } from './userdetails/userdetails.component';
import { AddComponent} from './add/add.component';
import { DeleteFormComponent} from './delete-form/delete-form.component';
import { EditFormComponent} from './edit-form/edit-form.component';
import { DownloadFormComponent} from './download-form/download-form.component';
import {DownloadandViewFormComponent} from './downloadand-view-form/downloadand-view-form.component';
import { ViewFormComponent} from './view-form/view-form.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: ViewFormComponent,
    data: { title: 'View form details' }
  },
  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Add form' }
  },
  {
    path: 'delete/:id',
    component: DeleteFormComponent,
    data: { title: 'delete form' }
  },
  {
    path: 'edit/:id',
    component: EditFormComponent,
    data: { title: 'Edit Form' }
  },
  {
    path: 'download/:id',
    component: DownloadFormComponent,
    data: { title: 'Download form' }
  },
  {
    path: 'view-download/:id',
    component: DownloadandViewFormComponent,
    data: { title: 'Download and view form ' }
  },
  {
    path: 'userdetails',
    component: UserdetailsComponent,
    data: { title: 'User details' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Log in' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'Admin Dashboard' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
