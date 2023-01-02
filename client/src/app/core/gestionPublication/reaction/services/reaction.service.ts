import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { reaction } from 'src/app/model/reaction';
import { environment } from 'src/environments/environment';

var token = environment.checkAuth.token;
var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'bearer ' + token,
});
const httpOptions = {
  headers: headers_object,
};

@Injectable({
  providedIn: 'root',
})
export class ReactionService {
  constructor(private http: HttpClient) {}

  getLike(idPub: any): Observable<reaction[]> {
    return this.http.get<reaction[]>(
      environment.url + 'reactions/fetchJaime/' + idPub
    );
  }

  getDisLik(idPub: any): Observable<any> {
    return this.http.get<reaction[]>(
      environment.url + 'reactions/fetchJaimePas/' + idPub,
      httpOptions
    );
  }

  addLike(data: reaction): Observable<any> {
    return this.http.post<reaction>(
      environment.url + 'reactions/add',
      data,
      httpOptions
    );
  }
}
