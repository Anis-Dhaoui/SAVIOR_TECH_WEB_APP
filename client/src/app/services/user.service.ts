import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

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
export class UserService {


  public url = environment.url + 'users'
 

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.url, httpOptions)
  }

  deleteUser(id: string) {
    return this.http.delete(this.url +'/' + id, httpOptions)
  }

  updateUser(u: User,) {
    return this.http.put(this.url +'/' + u.id, u, httpOptions)
  }

  addUser(u: User) {
    return this.http.post(`${this.url}/signup`, u)
  }


  login(data:any) {
    return this.http.post(`${this.url}/signin`, data);
  }

   blockUser(id : string){
    console.log(id)
    // if((this.informUser.isAdmin==true) && (this.informUser.isAuthenticated)){
    //   return this.http.put(`${this.url}/block/:userId`, id)
    // }
    return this.http.put(`${this.url}/block/${id}`, {}, httpOptions)
  }

  
  resetPassword(email: any){
    return this.http.post(`${this.url}/forgotpassword/sendlink/`, email)

  }


  updatePass(newPass:any, resetPassUrl: string): Observable<any>{
    return this.http.put(`${this.url}${resetPassUrl}`, newPass);
  }

   confirmEmail(userId: string, confirCode: string){
    return this.http.get(`${this.url}/verifyemail/${userId}/${confirCode}`);
   }
}

