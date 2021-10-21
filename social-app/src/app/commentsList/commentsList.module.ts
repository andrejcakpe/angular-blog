import { NgModule } from "@angular/core";
import {CommentsListComponent} from './commentsList.component'
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CommentsListComponent],
    imports: [(CommonModule)],
    exports: [CommentsListComponent]
})
export class CommentsListModule{}