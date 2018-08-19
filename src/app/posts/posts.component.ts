import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
        .subscribe(response => {
          this.posts = response.json();
        });
  }

  createPost(input: HTMLInputElement) {
    if (input === undefined) {
      console.log('Post cannot be empty!');
    }
    const post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response);
      });
    input.value = '';
  }

  ngOnInit() {
  }

}
