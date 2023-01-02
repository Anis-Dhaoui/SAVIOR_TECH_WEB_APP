import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vote } from '../model/vote';
import { tap } from 'rxjs/operators';

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

export class VoteService {
  

  public url=environment.url +'vote'
  private refrech = new Subject<void>();
  constructor(private http: HttpClient) {}

  getRefrech() {
    return this.refrech;
  }

  getvotebyId(id:string){
    return this.http.get<vote[]>(this.url+'/detail/'+id)
  }
  addVote(p:vote): Observable<vote>{
return this.http.post<vote>(this.url+'/add',p,httpOptions)
  }
  deletevote(id:number)
  {
return this.http.delete(this.url+id,httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  updateQuestion(p:vote){
    return this.http.put(this.url+p.id,p, httpOptions).pipe(
      tap(() => {
        this.refrech.next();
      })
    );
  }
}
