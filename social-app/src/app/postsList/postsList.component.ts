import { Component, Input, Output, EventEmitter } from "@angular/core";
import {PostInterface} from '../types/post.interface'
import {UserInterface} from '../types/user.interface'

@Component ({
    selector: 'app-posts-list',
    templateUrl: './postsList.component.html',
    styleUrls: ['./postsList.component.scss']
})
export class PostsListComponent {
    @Input() posts: PostInterface[]
    @Input() users: UserInterface[]
}