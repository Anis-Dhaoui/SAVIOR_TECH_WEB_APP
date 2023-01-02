import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './core/gestionQR/question/question.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { AddPublicationComponent } from './core/gestionPublication/add-publication/add-publication.component';
import { AllPublicationComponent } from './core/gestionPublication/all-publication/all-publication.component';
import { DetailPublicationComponent } from './core/gestionPublication/detail-publication/detail-publication.component';
import { SearchPublicationComponent } from './core/gestionPublication/search-publication/search-publication.component';

import { AdminComponent } from './core/users/admin/admin.component';
import { ProfileComponent } from './core/users/profile/profile.component';
import { SignupSigninComponent } from './core/users/signup-signin/signup-signin.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BestEventsComponent } from './core/Events/best-events/best-events.component';
import { EventsComponent } from './core/Events/events/events.component';
import { EventItemComponent } from './core/Events/event-item/event-item.component';
import { EventHeaderComponent } from './core/Events/event-header/event-header.component';
import { ShowComponent } from './core/users/show/show.component';
import { FormsModule } from '@angular/forms';
import { AddCommentaireComponent } from './core/gestionPublication/commentaire/add-commentaire/add-commentaire.component';
import { GetCommentaireComponent } from './core/gestionPublication/commentaire/get-commentaire/get-commentaire.component';
import { DeletCommentaireComponent } from './core/gestionPublication/commentaire/delet-commentaire/delet-commentaire.component';
import { GetReactionComponent } from './core/gestionPublication/reaction/get-reaction/get-reaction.component';
import { AddReactionComponent } from './core/gestionPublication/reaction/add-reaction/add-reaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from './core/gestionQR/add-question/add-question.component';
import { ItemQuestionComponent } from './core/gestionQR/item-question/item-question.component';
import { ItemReponsesComponent } from './core/gestionQR/item-reponses/item-reponses.component';
import { RatingSystemComponent } from './core/Events/rating-system/rating-system.component';
import { AddEventComponent } from './core/Events/add-event/add-event.component';
import { WelcomepageComponent } from './core/users/welcomepage/welcomepage.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailComponent } from './core/Events/event-detail/event-detail.component';
import { DetailQuestionComponent } from './core/gestionQR/detail-question/detail-question.component';
import { ReviewsComponent } from './core/Events/reviews/reviews.component';
import { AddReviewComponent } from './core/Events/add-review/add-review.component';
import { ResetPasswordFormComponent } from './core/users/reset-password-form/reset-password-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateQuestionComponent } from './core/gestionQR/update-question/update-question.component';

import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AddPublicationComponent,
    AllPublicationComponent,
    DetailPublicationComponent,
    SearchPublicationComponent,
    SideBarComponent,
    AdminComponent,
    ProfileComponent,
    SignupSigninComponent,
    SideBarComponent,
    BestEventsComponent,
    EventsComponent,
    EventItemComponent,
    EventHeaderComponent,
    ShowComponent,
    AddQuestionComponent,
    ItemQuestionComponent,
    ItemReponsesComponent,
    AddCommentaireComponent,
    GetCommentaireComponent,
    DeletCommentaireComponent,
    GetReactionComponent,
    AddReactionComponent,
    RatingSystemComponent,
    AddEventComponent,
    EventDetailComponent,
    ReviewsComponent,
    AddReviewComponent,
    WelcomepageComponent,
    EventDetailComponent,
    DetailQuestionComponent,
    ResetPasswordFormComponent,
    UpdateQuestionComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    ToastrModule.forRoot(),
   
    BrowserAnimationsModule,
    MatDialogModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
