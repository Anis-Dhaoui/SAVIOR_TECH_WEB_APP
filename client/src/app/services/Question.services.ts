import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { question } from '../model/question';
import { tap } from 'rxjs/operators';

var token = environment.checkAuth.token;
var headers_object = new HttpHeaders({
  'Authorization': "bearer " + token
});

const httpOptions = {
  headers: headers_object
};

@Injectable({
  providedIn: 'root'
})

export class QuestionService {


  public url=environment.url +'questions'
  private refrech = new Subject<void>();
  constructor(private http: HttpClient) {}

  getRefrech() {
    return this.refrech;
  }

  getAllQuestion(){
    return this.http.get<question[]>(this.url)
  }
  getAdminAllQuestion(){
    return this.http.get<question[]>(this.url+'/admin', httpOptions)
  }
  getQuestionbyId(id:string){
    return this.http.get<question[]>(this.url+'/detail/'+id)
  }
  addQuestion(p:question): Observable<question>{
return this.http.post<question>(this.url+'/add',p, httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  deleteQuestion(id:string){
    console.log(httpOptions)
return this.http.put(this.url+'/remove/'+id,{}, httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  deleteAdminQuestion(id:string){
    console.log(httpOptions)
return this.http.put(this.url+'/removeAdmin/'+id,{}, httpOptions).pipe(
  tap(() => {
    this.refrech.next();
  })
);
  }
  updateQuestion(p:question){
    console.log(httpOptions)
    return this.http.put(this.url+'/updateAdmin/'+p.id,p, httpOptions).pipe(
      tap(() => {
        this.refrech.next();
      })
    );
  }
  updateAdminQuestion(p:question){
    console.log(httpOptions)
    return this.http.put(this.url+'/update/'+p.id,p, httpOptions).pipe(
      tap(() => {
        this.refrech.next();
      })
    );
  }
}
