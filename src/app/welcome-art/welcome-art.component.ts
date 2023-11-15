import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-art',
  templateUrl: './welcome-art.component.html',
  styleUrl: './welcome-art.component.css'
})
export class WelcomeArtComponent implements OnInit{

  dragElement(element: HTMLElement): void {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      // Get the mouse cursor position at startup
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // Call a function whenever the cursor moves
      document.onmousemove = elementDrag;
    }

    const elementDrag = (e: MouseEvent) => {
      e.preventDefault();
      // Calculate the new cursor position
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Update the element's new position
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }

    const closeDragElement = () => {
      // Stop moving when mouse button is released
      document.onmouseup = null;
      document.onmousemove = null;
    }

    element.onmousedown = dragMouseDown;
  }

  initializeDraggableCubes(): void {
    this.dragElement(document.querySelector(".cube-container") as HTMLElement);
    this.dragElement(document.querySelector(".cube-two") as HTMLElement);
    this.dragElement(document.querySelector(".cube-three") as HTMLElement);
    this.dragElement(document.querySelector(".cube-four") as HTMLElement);
    this.dragElement(document.querySelector(".cube-five") as HTMLElement);
    this.dragElement(document.querySelector(".cube-six") as HTMLElement);
  }

  ngOnInit(): void {
    this.initializeDraggableCubes();
  }
}
