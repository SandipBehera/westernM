import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    AboutComponent,
    PricingComponent,
    ModalComponent,
    GalleryComponent,
    LocationComponent,
    FooterComponent,
    ThankyouComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NouisliderModule,
    NgbModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
