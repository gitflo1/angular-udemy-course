import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Image title';
  imageUrl = 'http://lorempixel.com/400/200';
  colspan = 2;
  isActive = true;
  email = 'me@example.com';
  text = '12345679 101112312fnafanb';

  onKeyUp() {
    console.log(this.email);
  }

  onDivClicked() {
    console.log('Div was clicked!');
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked!', $event);
    this.isActive ? this.isActive = false : this.isActive = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
