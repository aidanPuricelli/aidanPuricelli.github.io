import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isVisible = false;

  

  vhInPixels(vh: number): number {
    return vh * (window.innerHeight / 100);
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const threshold = this.vhInPixels(270);
    if (scrollPosition > threshold) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

}
