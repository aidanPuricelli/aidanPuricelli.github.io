import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isVisible = false;

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }

  }

  vhInPixels(vh: number): number {
    return vh * (window.innerHeight / 100);
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const threshold = this.vhInPixels(110);
    if (scrollPosition > threshold) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  


}
