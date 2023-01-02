import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgurApiService {

  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '05c01f87ea0df6b';
  imageLink: string;
  imgurRes: any;

  constructor(private http: HttpClient) { }

  uploadImage(b64Image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`,
      }),
    };

    const formData = new FormData();
    formData.append('image', b64Image);
    return this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
    // this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions).subscribe((res) => {
    //   this.imgurRes = res;
    //   this.imageLink = this.imgurRes.data.link;
    // })

    // return this.imageLink;
  }
}
