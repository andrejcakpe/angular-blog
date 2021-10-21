import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {PostsListComponent} from 'src/app/postsList/postsList.component'

@NgModule ({
    declarations: [PostsListComponent],
    imports: [(CommonModule)],
    exports: [PostsListComponent]
})
export class PostsListModule{}