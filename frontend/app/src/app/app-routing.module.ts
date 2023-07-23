import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CandidatelistGuard } from './guards/candidatelist.guard';
import { AdminGuard } from './guards/admin.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { ElectionlistComponent } from './electionlist/electionlist.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { VoteresultsComponent } from './voteresults/voteresults.component';
import { ElectionlistGuard } from './guards/electionlist.guard';
import { InformationPageComponent } from './information-page/information-page.component';
import { MemberslistComponent } from './memberslist/memberslist.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  {
    path: 'candidatelist',
    component: CandidatelistComponent,
    canActivate: [CandidatelistGuard],
  },
  { path: 'electionlist', component: ElectionlistComponent, canActivate:[ElectionlistGuard] },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'results', component: VoteresultsComponent },
  {path:'informationPage', component:InformationPageComponent},
 {path: 'membersList', component: MemberslistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
