import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { publication } from 'src/app/model/publication';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Console } from 'console';

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
export class PublicationService {
  private refrech = new Subject<void>();
  constructor(private http: HttpClient) {}

  getRefrech() {
    return this.refrech;
  }

  get(): Observable<publication[]> {
    return this.http.get<publication[]>(environment.url + 'publications/fetch');
  }
  add(data: publication): Observable<any> {
    return this.http
      .post<publication>(
        environment.url + 'publications/add',
        data,
        httpOptions
      )
      .pipe(
        tap(() => {
          this.refrech.next();
        })
      );
  }

  getById(id: any): Observable<any> {
    return this.http.get(environment.url + 'publications/detail/' + id);
  }
  deletPub(id: any) {
    return this.http.delete(environment.url + 'publications/remove/' + id, httpOptions);
  }
  update(id: any, data: publication): Observable<any> {
    return this.http.put(environment.url + 'publications/update/' + id, data, httpOptions);
  }
  search(data: any): Observable<any> {
    return this.http.get(environment.url + 'publications/search/' + data);
  }

  // addSignalier(data: any){
  // return this.http.post(environment.url+'signaler/add', data);
  // }
}
//controle utilisateur
//upload image
//supp commentaire
