import { Injectable } from '@angular/core';
import { School } from '../models/school';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  education: School[] = [
    new School(
      'Old Dominion University',
      'B.S. in Computer Science with a minor in Cybersecurity',
      'January 2017',
      'December 2019',
      'https://www.odu.edu/compsci',
      'Norfolk, VA'
    ),
    new School(
      'Tidewater Community College',
      'A.S. in Computer Science',
      'August 2015',
      'December 2016',
      'https://www.tcc.edu/programs/computer-science/',
      'Chesapeake, VA'
    ),
  ];

  jobs: Work[] = [
    new Work(
      'CACI',
      'Java Developer',
      'May 2021',
      'Present',
      'https://www.caci.com/'
    ),
    new Work(
      'CACI',
      'System/Business Analyst',
      'May 2020',
      'May 2021',
      'https://www.caci.com/'
    ),
    new Work(
      'Norfolk Naval Shipyard',
      'Equipment Mechanic',
      'March 2018',
      'April 2020',
      'https://www.navsea.navy.mil/Home/Shipyards/Norfolk/'
    ),
    new Work(
      'CACI',
      'Word Processor II/Office Automation Clerk',
      'August 2017',
      'March 2018',
      'https://www.caci.com/'
    ),
    new Work(
      'United States Navy',
      'Avionics Calibration Technician',
      'June 2011',
      'September 2015',
      'https://www.navy.mil/'
    ),
  ];

  getEducation() {
    return this.education;
  }

  getJobs() {
    return this.jobs;
  }
}
