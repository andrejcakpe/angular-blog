import { Component, Input } from "@angular/core";
import {CommentInterface} from '../types/comment.interface'

@Component({
    selector: 'app-comments-list',
    templateUrl: './commentsList.component.html',
    styleUrls: ['./commentsList.component.scss']
    
})
export class CommentsListComponent{
    @Input() comments: CommentInterface[]
}