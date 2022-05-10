import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css'],
})
export class AnnouncementDetailsComponent implements OnInit {
  id!: number;
  announcement!: Announcement;
  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.announcement = new Announcement();
    this.announcementService.getAnnouncementById(this.id).subscribe((data) => {
      this.announcement = data;
    });
  }
}
