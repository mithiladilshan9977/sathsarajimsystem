import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  activeLink = 'home';
  scrolled = false;


  constructor() { }
 

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.activeLink = sectionId;
  
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -100;  
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = scrollY > 0;
  }
  
}
