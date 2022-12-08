import { Component, EventEmitter, Output } from '@angular/core';

interface Post {
  postTitle: string;
  postDesc: string;
  postDate: string;
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',

})
export class PostListComponent {
  postTitle: string = '';
  postDesc: string = '';
  postdate: string = '';
  likedPosts: Post[] = [];
  isLiked: boolean = false;

  posts: Post[] = [
    {
      postTitle: 'Share Your Experience',
      postDesc:
        "Share Your Experience...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
      postDate: '20 November 2022',
    },
    {
      postTitle: 'Get Use to it. Make it a Weapon',
      postDesc:
        "Kindly, Get use to it...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
      postDate: '18 October 2022',
    },
    {
      postTitle: 'Change the World with Innovations',
      postDesc:
        " BE active and Change the world with Innovative ideasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  ",
      postDate: '17 September 2022',
    },
  ];
  addPosts() {
    this.posts.push({
      postTitle: this.postTitle,
      postDesc: this.postDesc,
      postDate: new Date().toLocaleDateString('en-in', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      }),
    });
  }

  handleLike(post: Post) {
    const index = this.likedPosts.findIndex((value) => value == post);
    if (index < 0) this.likedPosts.push(post);
    else this.likedPosts.splice(index, 1);
    console.log(this.likedPosts);
  }
  seeLiked() {
    this.isLiked = this.isLiked ? false : true;
  }
}
