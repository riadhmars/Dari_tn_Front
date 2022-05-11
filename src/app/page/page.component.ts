import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../announcement.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  announcements!: Announcement[];
  retrieveResonse: any;
  base64Data: any;
  imageName: any;
  retrievedImage: any;

  constructor(
    private announcementService: AnnouncementService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }
  private getAnnouncements() {
    this.announcementService.getAnnouncementList().subscribe((data) => {
      this.announcements = data;
    });
  }

  announcementDetails(id_an: number) {
    this.router.navigate(['announcement-details', id_an]);
  }

  updateAnnouncement(id_an: number) {
    this.router.navigate(['update-announcement', id_an]);
  }
  deleteAnnouncement(id_an: number) {
    this.announcementService.deleteAnnouncement(id_an).subscribe((data) => {
      console.log(data);
      this.getAnnouncements();
    });
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Announcement[] = [];
    for (const announcement of this.announcements) {
      if (
        announcement.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(announcement);
      }
    }
    this.announcements = results;
    if (results.length === 0 || !key) {
      this.getAnnouncements();
    }
  }

   public reserver(id_an: number){
    this.router.navigateByUrl('/visite/' + id_an);
  }
}
