import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { vote } from '../model/vote';
import { tap } from 'rxjs/operators';
import { aimes } from '../model/Aimes';

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

export class AimesService {
  

  public url=environment.url +'aimes'
  private refrech = new Subject<void>();
  constructor(private http: HttpClient) {}

  getRefrech() {
    return this.refrech;
  }

  getaimesbyId(id:string){
    return this.http.get<aimes[]>(this.url+'/detail/'+id)
  }
  addAimes(p:aimes): Observable<aimes>{
return this.http.post<aimes>(this.url+'/add',p,httpOptions)
  }
  deletevote(id:number)
  {
return this.http.delete(this.url+id,httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  updateQuestion(p:aimes){
    return this.http.put(this.url+p.id,p, httpOptions).pipe(
      tap(() => {
        this.refrech.next();
      })
    );
  }
}
