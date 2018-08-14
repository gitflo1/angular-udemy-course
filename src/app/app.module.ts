import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { CoursesComponent } from './courses/courses.component';
import { CustomTitleCasePipe } from './title-case/custom-title-case.pipe';
import { StarIconComponent } from './star-icon/star-icon.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    StarIconComponent,
    CustomTitleCasePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
