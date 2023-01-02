import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { commentaire } from 'src/app/model/commentaire';
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
export class CommentaireService {
  private refrech = new Subject<void>();

  constructor(private http: HttpClient) {}
  getRefrech() {
    return this.refrech;
  }

  get(idPub: any): Observable<commentaire[]> {
    return this.http.get<commentaire[]>(
      environment.url + 'commentaires/commentairesPublication/' + idPub
    );
  }
  add(data: commentaire): Observable<commentaire> {
    return this.http
      .post<commentaire>(
        environment.url + 'commentaires/add',
        data,
        httpOptions
      )
      .pipe(
        tap(() => {
          this.refrech.next();
        })
      );
  }
  deletCom(id: any) {
    return this.http.delete(
      environment.url + 'commentaires/remove/' + id,
      httpOptions
    );
  }
}

// services de publication : get , add , update , delet , search
// services commentaire : get , add , delet
//services reactions : add , get
// controle de formulaire
// refrech Component
// uplod image
// {user concte , if not concte quel sont les tache a afficte}
// {singlier}
