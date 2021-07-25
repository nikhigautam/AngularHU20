import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { Route } from '@angular/compiler/src/core';
import { CoursesService } from './courses.service';
import { HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SmallcartComponent } from './smallcart/smallcart.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AboutComponent } from './about/about.component';


const routes = [
  {path: '', component: CoursesComponent},
  {path: 'courses-page', component: CoursesComponent},
  {path: 'about-page', component: AboutComponent},
  {path: 'profile-page', component: ProfileComponent},
  {path: 'cart-page', component: CartComponent},
  {path: 'wishlist-page', component: WishlistComponent},
  {path: 'courses-page/cart-page', component: CartComponent},
  {path: 'wishlist-page/cart-page', component: CartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    CoursesComponent,
    CartComponent,
    WishlistComponent,
    SmallcartComponent,
    SearchFilterPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
