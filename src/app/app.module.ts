import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireModule} from '@angular/fire/compat'
import { FireService } from './fire.service';
import { ReactiveFormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AuthComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDiXPS6Ge8rgGKkSjaK7r4f7IewTjgq2n0",
      authDomain: "frontend-project-20c52.firebaseapp.com",
      projectId: "frontend-project-20c52",
      storageBucket: "frontend-project-20c52.appspot.com",
      messagingSenderId: "1089688823758",
      appId: "1:1089688823758:web:a14c930272fd76fb4c2d9f"
    }),
  ],
  exports:[TranslateModule],
  providers: [HttpClient,FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
