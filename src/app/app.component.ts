import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitshit';

  public clickShit(): void {
    this.title = 'asdfasdf';
  }
}
