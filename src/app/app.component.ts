import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Location /';

  openNavigation() {
    document
      .getElementById('nav-container')
      .setAttribute('style', 'width:150px');
    document
      .getElementById('projectWrapper')
      .setAttribute('style', 'margin-left:120px');
    document.getElementById('close').setAttribute('style', 'opacity:1');
    document.getElementById('iconsbar1').setAttribute('style', 'opacity:0');
    document.getElementById('iconsbar2').setAttribute('style', 'opacity:0');
    document.getElementById('iconsbar3').setAttribute('style', 'opacity:0');
    document.getElementById('menuicon').setAttribute('style', 'opacity:0');
  }

  closeNavigation() {
    document
      .getElementById('projectWrapper')
      .setAttribute('style', 'margin-left:0px');
    document
      .getElementById('nav-container')
      .setAttribute('style', 'width:30px');
    document.getElementById('close').setAttribute('style', 'opacity:0');
    document.getElementById('iconsbar1').setAttribute('style', 'opacity:1');
    document.getElementById('iconsbar2').setAttribute('style', 'opacity:1');
    document.getElementById('iconsbar3').setAttribute('style', 'opacity:1');
    document.getElementById('menuicon').setAttribute('style', 'opacity:1');
  }
}
