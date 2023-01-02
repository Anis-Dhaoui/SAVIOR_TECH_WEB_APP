import { ImgurApiService } from '../../../services/imgur-api.service';
import { EventService } from './../../../services/event.service';
import { EVENTS } from './../../../model/eventsModel';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: [
    './add-event.component.css',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AddEventComponent implements OnInit {

  event!: EVENTS;
  private imageFile: File;
  imgurRes: any;

  constructor(private eventService: EventService, private uploadImg: ImgurApiService, private toastr: ToastrService) {
    this.event = new EVENTS();
  }

  ngOnInit(): void {
  }

  addNewEvent(form: any) {
    this.uploadImg.uploadImage(this.imageFile).subscribe((res) => {
      this.imgurRes = res;
      this.event.event_image = this.imgurRes.data.link;

      this.eventService.addEvent(this.event).subscribe((data) => {
        this.toastr.success('Event Added', 'Success');
        // form.resetForm();
      },
        (err) => {
          this.toastr.error(err.error.message, 'Conflict:')
        },
        () => { console.log('complete success'); this.event.event_image = "" })


    })
    // this.event.event_image = this.uploadImg.uploadImage(this.imageFile);
    // console.log(this.event.event_image);
    // if (this.event.event_image != undefined) {
    //   this.eventService.addEvent(this.event).subscribe((data) => {
    //     this.toastr.success('Event Added', 'Success');
    //     // form.resetForm();
    //   },
    //     (err) => {
    //       this.toastr.error(err.error.message, 'Conflict:')
    //     },
    //     () => { console.log('complete success') })
    // }
  }

  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];
  }

  addImage() {
    this.uploadImg.uploadImage(this.imageFile);
  }

}
