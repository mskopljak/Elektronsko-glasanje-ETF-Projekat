import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ElectionlistComponent } from './electionlist/electionlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatesComponent } from './candidates/candidates.component';
import { VoteresultsComponent } from './voteresults/voteresults.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalComponent } from './modal/modal.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { MemberslistComponent } from './memberslist/memberslist.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatelistComponent,
    AdminComponent,
    HomePageComponent,
    ElectionlistComponent,
    CandidatesComponent,
    VoteresultsComponent,
    ModalComponent,
    InformationPageComponent,
    MemberslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 2000,
      positionClass: 'toastr',
      preventDuplicates: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
