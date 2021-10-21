import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {UserInterface} from './types/user.interface'
import {PostInterface} from './types/post.interface'
import {CommentInterface} from './types/comment.interface'
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  users: UserInterface[] = []
  posts: PostInterface[] = []
  comments: CommentInterface[] = []

  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit(): void {
    console.log('ngOnInit')
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      console.log('res', users)
      this.users = users
    }) 
    console.log('ngOnInit')
    this.http.get('http://localhost:3000/Posts')
    .subscribe((posts: PostInterface[]) => {
      console.log('res', posts)
      this.posts = posts
    })
    console.log('ngOnInit')
    this.http.get('http://localhost:3000/Comments')
    .subscribe((comments: CommentInterface[]) => {
      console.log('res', comments)
      this.comments = comments
    })
  }
   
}
