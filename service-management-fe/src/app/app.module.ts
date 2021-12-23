import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateAidComponent } from './create-aid/create-aid.component';
import { ListAidComponent } from './list-aid/list-aid.component';
import { AidDetailsComponent } from './aid-details/aid-details.component';
import { UpdateAidComponent } from './update-aid/update-aid.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { CreateExpanseComponent } from './create-expanse/create-expanse.component';
import { ListExpanseComponent } from './list-expanse/list-expanse.component';
import { ChoseServiceComponent } from './chose-service/chose-service.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PayemntAlertsComponent } from './payemnt-alerts/payemnt-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateHouseComponent,
    ListHouseComponent,
    CreateAidComponent,
    ListAidComponent,
    AidDetailsComponent,
    UpdateAidComponent,
    PaymentComponent,
    RegisterUserComponent,
    LoginUserComponent,
    CreateExpanseComponent,
    ListExpanseComponent,
    ChoseServiceComponent,
    UserDetailsComponent,
    PayemntAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
