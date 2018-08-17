import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    if (this.isActive === false) {
      this.likesCount++;
      this.isActive = true;
    } else {
      this.likesCount--;
      this.isActive = false;
    }
  }

}
