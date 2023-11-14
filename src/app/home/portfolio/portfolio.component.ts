import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  currentProjectIndex = 0;

  projects = [
    {title: 'VinylVault', role:'Creator', dates: 'Nov 2023 - Present', description: 'Developed a user-friendly vinyl collection and wishlist management application using Angular and SpringBoot.', image:'../../../assets/vinylvault.png'},
    {title: 'DivArt', role:'Creator', dates: 'Nov 2023 - Present', description: 'Website art project. All art on the website has been created using only HTML and CSS code. Inspired by Lynn Fisher\'s project, A Single Div.', image:'../../../assets/divart.png'},
    {title: 'Magic Card AI', role:'Creator', dates: 'Nov 2023 - Present', description: 'Web application created using the openAI API. After being given a prompt, generates an original Magic the Gathering card.', image:'../../../assets/magic.png'},
    {title: 'Video Game', role:'Creator', dates: 'Nov 2023 - Present', description: 'Original video game created in GameMaker Studio 2. All of the art, music, and game logic has been created by me.', image:'../../../assets/videoGame.png'},
  ]

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }

  }

  constructor(private changeDetector: ChangeDetectorRef) {}

  previousProject() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
      this.changeDetector.detectChanges(); // Manually trigger change detection
    }
  }

  nextProject() {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
      this.changeDetector.detectChanges(); // Manually trigger change detection
    }
  }

}
