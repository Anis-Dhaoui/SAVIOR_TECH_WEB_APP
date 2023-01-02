import { REVIEW } from './../model/reviewModel';
import { EVENTS } from './../model/eventsModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

var token = environment.checkAuth.token;
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "bearer " + token
});

const httpOptions = {
  headers: headers_object
};
@Injectable({
  providedIn: 'root'
})
export class EventService {
  URL: string = environment.url;

  constructor(private http: HttpClient) {
  };

  // $$$$$$$$$$$$$$$$$$$$$$$// EVENTS // $$$$$$$$$$$$$$$$$$$$$$$//
  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.URL}events/`)
  }

  getOneEvent(eventId: string): Observable<EVENTS> {
    return this.http.get<EVENTS>(`${this.URL}events/${eventId}`);
  }

  addEvent(body: EVENTS): Observable<EVENTS> {
    return this.http.post<EVENTS>(`${this.URL}events/`, body);
  }


  // $$$$$$$$$$$$$$$$$$$$$$$// REVIEWS // $$$$$$$$$$$$$$$$$$$$$$$//
  addReview(body: any): Observable<any> {
    return this.http.post<any>(`${this.URL}reviews/`, body, httpOptions);
  }

  removeReview(revId: string): Observable<any> {
    return this.http.delete(`${this.URL}reviews/${revId}`);
  }

  editReview(body: any): Observable<any> {
    return this.http.put(`${this.URL}reviews/${body.id}`, body);
  }


  // $$$$$$$$$$$$$$$$$$$$$$$// PARTICIPATE // $$$$$$$$$$$$$$$$$$$$$$$//
  participateUser(eventId: string): Observable<any> {
    return this.http.post(`${this.URL}events/participate/${eventId}`, {}, httpOptions)
  }

  // $$$$$$$$$$$$$$$$$$$$$$$// PAYMENT ONLINE WITH PAYPAL // $$$$$$$$$$$$$$$$$$$$$$$//
  payEvent(eventId: string): Observable<any> {
    return this.http.post(`${this.URL}payment/pay/${eventId}`, {}, httpOptions);
  }
}
