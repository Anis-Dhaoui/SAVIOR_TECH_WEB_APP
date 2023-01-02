import { ResetPasswordFormComponent } from './core/users/reset-password-form/reset-password-form.component';
import { AuthGuardService } from './core/users/auth-guard.service';
import { EventDetailComponent } from './core/Events/event-detail/event-detail.component';
import { EventsComponent } from './core/Events/events/events.component';
import { SignupSigninComponent } from './core/users/signup-signin/signup-signin.component';
import { AdminComponent } from './core/users/admin/admin.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './core/gestionQR/question/question.component';
import { AddQuestionComponent } from './core/gestionQR/add-question/add-question.component';
import { DetailQuestionComponent } from './core/gestionQR/detail-question/detail-question.component';
import { ProfileComponent } from './core/users/profile/profile.component';
import { AllPublicationComponent } from './core/gestionPublication/all-publication/all-publication.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DetailPublicationComponent } from './core/gestionPublication/detail-publication/detail-publication.component';
import { WelcomepageComponent } from './core/users/welcomepage/welcomepage.component';
import { UpdateQuestionComponent } from './core/gestionQR/update-question/update-question.component';

const routes: Routes = [
  // $$$$$$$ USERS $$$$$$$
  { path: 'admin', component: AdminComponent},
  { path: 'signup_signin', component: SignupSigninComponent },
  { path:  'profile', component: ProfileComponent},
  { path: 'welcome', component:WelcomepageComponent },
  {path: 'users/forgotpassword/resetpassword/:user.id/:confirResetPasswordCode', component: ResetPasswordFormComponent},
  {path: 'users/verifyemail/:userId/:confirCode', component: HomeComponent},
  


  { path: 'allPublication', component: AllPublicationComponent },
  { path: 'detailPublication/:id', component: DetailPublicationComponent },
  //Question
  { path: 'question', component: QuestionComponent },
  { path: 'addquestion', component: AddQuestionComponent },
  { path: 'question/:id', component: DetailQuestionComponent },
  { path: 'update/:id', component: UpdateQuestionComponent },
  // $$$$$$$ EVENTS $$$$$$$$
  { path: 'events', component: EventsComponent },
  { path: 'events/:eventId', component: EventDetailComponent },
  // $$$$$$$ EVENTS $$$$$$$$


  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
