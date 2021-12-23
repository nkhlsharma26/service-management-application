import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AidDetailsComponent } from './aid-details/aid-details.component';
import { ChoseServiceComponent } from './chose-service/chose-service.component';
import { CreateAidComponent } from './create-aid/create-aid.component';
import { CreateExpanseComponent } from './create-expanse/create-expanse.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { ListAidComponent } from './list-aid/list-aid.component';
import { ListExpanseComponent } from './list-expanse/list-expanse.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { PayemntAlertsComponent } from './payemnt-alerts/payemnt-alerts.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UpdateAidComponent } from './update-aid/update-aid.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'addExpanse', component: CreateExpanseComponent },
  { path: ':username/getAllHousesForUser', component: ListHouseComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'addHouse', component: CreateHouseComponent },
  { path: 'addAid', component: CreateAidComponent },
  { path: 'ListAids', component: ListAidComponent },
  { path: 'showAid', component: AidDetailsComponent },
  { path: 'updateAid', component: UpdateAidComponent },
  { path: ':houseId/getAllAidsForHouse', component: ListAidComponent },
  { path: 'getAllExpensesForUser/:username', component: ListExpanseComponent },
  { path: 'ChooseService', component: ChoseServiceComponent },
  { path: 'UserDetails', component: UserDetailsComponent },
  { path: 'paymentAlert', component: PayemntAlertsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
