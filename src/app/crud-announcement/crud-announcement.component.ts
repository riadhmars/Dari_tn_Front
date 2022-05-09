import { HttpClient, HttpEvent } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-crud-announcement',
  templateUrl: './crud-announcement.component.html',
  styleUrls: ['./crud-announcement.component.css'],
})
export class CrudAnnouncementComponent implements OnInit {
  announcements!: Announcement[];
  announcement: Announcement = new Announcement();
  // private baseUrl = 'http://localhost:8080';

  constructor(
    private announcementService: AnnouncementService,
    private router: Router,
    private httpClient: HttpClient /***************/
  ) {}

  //listAn:any;

  ngOnInit(): void {
    //    this.fileInfos = this.annoucementService.getFiles(); /***************** */
    this.getAnnouncements();
  }
  /////////////////

  ////////////////

  updateAnnouncement(id_an: number) {
    this.router.navigate(['update-announcement', id_an]);
  }

  deleteAnnouncement(id_an: number) {
    this.announcementService.deleteAnnouncement(id_an).subscribe((data) => {
      console.log(data);
      this.getAnnouncements();
    });
  }

  saveAnnouncement() {
    this.announcementService.addAnnouncement(this.announcement).subscribe(
      (data) => {
        console.log(data);
        this.goToAnnoucementList();
        //console.log(this.selectedFile);
        //const uploadImageData = new FormData();
        //uploadImageData.append(
        //'imageFile',
        //this.selectedFile,
        //this.selectedFile.name
        // );

        //Make a call to the Spring Boot Application to save the image
        // this.httpClient
        // .post('http://localhost:8090/DariTn/image/upload', uploadImageData, {
        // observe: 'response',
        //})
        //.subscribe((response) => {
        //if (response.status === 200) {
        //this.message = 'Image uploaded successfully';
        //} else {
        //this.message = 'Image not uploaded successfully';
        //}
        // });
      },
      (error) => console.log(error)
    );
  }
  goToAnnoucementList() {
    this.router.navigate(['/announcements']);
  }
  /*
  onSubmit() {
    console.log(this.announcement);
    this.saveAnnouncement();
  }
*/
  uploadedImage!: File;
  image: any;
  response: any;

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  post!: FormGroup;
  // postResponse: any;
  //successResponse!: string;
  //Gets called when the user selects an image

  upload(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
    //Select File
    // const file = event.target.files[0];
    //this.post.get('img')?.setValue(file);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadedImage);
    //formData.append('file', this.post.get('img')?.value);
    console.log(this.announcement);
    this.announcementService.addAnnouncement(formData).subscribe(() => {
      this.goToAnnoucementList();
    });
  }

  //Gets called when the user clicks on submit to upload the image

  //Gets called when the user clicks on retieve image button to get the image from back end

  userFile: any;
  public imagePath: any;
  imgURL: any;
  onSelectFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }

  announcementDetails(id_an: number) {
    this.router.navigate(['announcement-details', id_an]);
  }
  private getAnnouncements() {
    this.announcementService.getAnnouncementList().subscribe((data) => {
      this.announcements = data;
    });
  }
  /*
  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);

    this.httpClient
      .post(
        'http://localhost:8090/DariTn/Announcementcontroller/Announcements',
        imageFormData,
        {
          observe: 'response',
        }
      )
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      });
  }
  */
}
