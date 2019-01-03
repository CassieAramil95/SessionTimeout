import {HttpModule} from '@angular/http';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProgressBarModalComponent} from './progressbar-modal.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component'
//import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {
      path: 'login',
      component: LoginComponent,
  },
{
    path: 'home',
    component: HomeComponent,
},

];


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarModalComponent,
    HomeComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProgressBarModalComponent]
})
export class AppModule {
}