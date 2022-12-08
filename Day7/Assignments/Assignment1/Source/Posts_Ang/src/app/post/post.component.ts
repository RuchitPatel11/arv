import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Post {
  postTitle: string;
  postDesc: string;
  postDate: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',

})
export class PostComponent {
  @Input() post!: Post;
  @Output() like = new EventEmitter<Post>();

  handleClick() {
    this.like.emit(this.post);
  }
}
