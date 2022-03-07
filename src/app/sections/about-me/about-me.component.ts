import { Component, OnInit } from '@angular/core';

import { School } from 'src/app/models/school';
import { Work } from 'src/app/models/work';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  education: School[] = [];
  jobs: Work[] = [];

  constructor(aboutMeService: AboutMeService) {
    this.education = aboutMeService.getEducation();
    this.jobs = aboutMeService.getJobs();
  }

  ngOnInit(): void {}
}
