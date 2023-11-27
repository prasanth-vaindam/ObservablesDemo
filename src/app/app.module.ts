import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FormsModule } from '@angular/forms';
import { MyService } from './my.service';

@NgModule({
  declarations: [AppComponent, CompOneComponent, CompTwoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
