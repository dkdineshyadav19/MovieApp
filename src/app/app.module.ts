import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NEtflixOriginalsComponent } from './component/netflix-originals/netflix-originals.component';
import { TrendingComponent } from './component/trending/trending.component';
import { HomeComponent } from './component/home/home.component';
import { TopRatedComponent } from './component/top-rated/top-rated.component';
import { ActionMoviesComponent } from './component/action-movies/action-movies.component';
import { ComedyComponent } from './component/comedy/comedy.component';
import { HorrorComponent } from './component/horror/horror.component';
import { RomanceComponent } from './component/romance/romance.component';
import { WarComponent } from './component/war/war.component';
import { TvMoviesComponent } from './component/tv-movies/tv-movies.component';
import { FamilyComponent } from './component/family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    NEtflixOriginalsComponent,
    TrendingComponent,
    HomeComponent,
    TopRatedComponent,
    ActionMoviesComponent,
    ComedyComponent,
    HorrorComponent,
    RomanceComponent,
    WarComponent,
    TvMoviesComponent,
    FamilyComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
