import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  courses: Array<any>;
  constructor() { }

  ngOnInit() {
    this.courses = [
      { title: 'B. M. M. (English)', subTitle: 'Bachelors in Mass Media', intake: 60, imageUrl: 'assets/english.jpeg' },
      { title: 'B. A. (Film Television & New Media Production)', subTitle: 'Bachelors in Arts', intake: 60, imageUrl: 'assets/films-small.jpeg' },
      { title: 'B.Sc. (Psychology)', subTitle: 'Bachelors in Science', intake: 60 , imageUrl: 'assets/psychology_small.png' },
      { title: 'B.Sc. (Actuarial  Science)', subTitle: 'Bachelors in Science', intake: 60 , imageUrl: 'assets/science-small.jpeg' },
      { title: 'B.Sc. (Data Science)', subTitle: 'Bachelors in Science', intake: 60 , imageUrl: 'assets/data-science-small.jpeg' }
    ]
  }

}
