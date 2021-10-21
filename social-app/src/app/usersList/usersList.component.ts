import {Component, Input, Output, EventEmitter} from '@angular/core'
import { UserInterface } from '../types/user.interface'

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent {
  @Input() users: UserInterface[]
  
}
