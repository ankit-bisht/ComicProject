import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConnectService } from './connect.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { Configuration } from "app/config";
import { SearchComponent } from './search/search.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';

const rou1:Routes=[
     {path : 'login', component : LoginComponent},
     {path : 'search', component : SearchComponent},
     {path : 'super-admin', component : SuperAdminComponent,canActivate: [AuthService],data:[{usertype:'1'}]},
     {path : 'user', component : UserComponent,canActivate: [AuthService],data:[{usertype:'3'}]},
     {path : 'admin', component : AdminComponent,canActivate: [AuthService],data:[{usertype:'2'}]},
     {path : 'register', component : RegisterComponent},
     {path : 'header', component : HeaderComponent},
     {path : 'verify', component : VerifyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    SuperAdminComponent,
    AdminComponent,
    UserComponent,
    RegisterComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rou1)
  ],
  providers: [AuthService,ConnectService,Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
