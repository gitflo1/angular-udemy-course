import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css']
})
export class StarIconComponent implements OnInit {

  isActive = false;
  text: string;

  onStarClick() {
    console.log('Star was clicked!');
    if (this.isActive === true) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
