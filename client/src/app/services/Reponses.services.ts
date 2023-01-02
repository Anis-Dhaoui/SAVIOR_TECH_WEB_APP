import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { reponses } from '../model/reponses';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReponsesService {
  user = environment.checkAuth.token;
  httpOptions = {
    headers: new HttpHeaders({'Authorization': "bearer " + this.user})
  };
  public url=environment.url +'reponses'
  private refrech = new Subject<void>();
  constructor(private http: HttpClient) {}

  getRefrech() {
    return this.refrech;
  }
  getAllReponses(id:string){
    return this.http.get<reponses[]>(this.url+'/'+id)
  }
  addReponses(p:reponses){
    console.log(this.httpOptions)
return this.http.post(this.url+'/add',p,this.httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  deleteReponses(id:string)
  {
return this.http.delete(this.url+'/remove/'+id, this.httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  updateReponses(p:reponses){
    return this.http.put(this.url+'/update/'+p.id,p, this.httpOptions).pipe(
      tap(() => {
        this.refrech.next();
      })
    );
  }
}
