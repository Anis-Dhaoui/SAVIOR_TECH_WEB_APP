import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Subscribable, Subscription } from 'rxjs';
import { publication } from 'src/app/model/publication';
import { ImgurApiService } from 'src/app/services/imgur-api.service';
import { environment } from 'src/environments/environment';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css'],
})
export class AddPublicationComponent implements OnInit {
  publication: publication = new publication();
  uploadedImage: File;
  base64: any;
  loading: boolean = false;
  userData: any;
  imgurRes: any;

  detailData: any;
  imageFormData = File;
  private imageFile: File;
  constructor(
    private servicePublication: PublicationService,
    private router: Router,
    private uploadImg: ImgurApiService
  ) {
    this.userData = environment.checkAuth.isAuthenticated;
    this.detailData = environment.checkAuth.user;
  }

  @ViewChild('form') mytemplateForm!: NgForm;
  ngOnInit(): void { }

  ajout() {
    this.uploadImg.uploadImage(this.imageFile).subscribe((res) => {
      this.imgurRes = res;
      this.publication.image = this.imgurRes.data.link;

      this.servicePublication.add(this.publication).subscribe((res) => {
        console.log("publication ajouté avec succées");
      },
        (error) => { console.log(error) },
        () => { }
      );
      this.router.navigateByUrl('/allPublication');
      this.mytemplateForm.reset();
    })
    // this.publication.image = this.uploadImg.uploadImage(this.imageFile);
    // this.servicePublication.add(this.publication).subscribe();
    // this.router.navigateByUrl('/allPublication');
    // this.mytemplateForm.reset();

  }

  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];

  }

  // getPathImage(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.base64 = reader.result;
  //   };
  // }
}
