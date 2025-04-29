import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-jim-home',
  templateUrl: './jim-home.component.html',
  styleUrls: ['./jim-home.component.css']
})
export class JimHomeComponent  {

  ismounthselected: boolean = false;
  isquarterselected: boolean = true;
  isannualselected: boolean = false;
  isseeallselected: boolean = false;

  showsuccessstory1: boolean = true;
  showsuccessstory2: boolean = false;
  showsuccessstory3: boolean = false;

  activeDot: string = '1';
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
  
  

  selectChip(event: any,text:string) {
    const allChips = document.querySelectorAll('.chips');
    allChips.forEach(chip => chip.classList.remove('active'));
    event.target.classList.add('active');


    if (text == 'Monthly') {
      this.ismounthselected = true;
      this.isquarterselected = false;
      this.isannualselected = false;
      this.isseeallselected = false;
      
    } else if (text == 'Quarterly') {
      this.ismounthselected = false;
      this.isquarterselected = true;
      this.isannualselected = false;
      this.isseeallselected = false;
    }else if (text == 'Annual') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = true;
      this.isseeallselected = false;
    }
    else if (text == 'ViewAll') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = false;
      this.isseeallselected = true;
    }

  }
 
  






  showsuccessstory(number: string) {
    this.activeDot = number;
    this.updateSuccessStory();
  }
  
  goprevious() {
    let current = parseInt(this.activeDot);
    current--;
    if (current < 1) {
      current = 3;  
    }
    this.activeDot = current.toString();
    this.updateSuccessStory();
  }
  
  goforward() {
    let current = parseInt(this.activeDot);
    current++;
    if (current > 3) {
      current = 1;  
    }
    this.activeDot = current.toString();
    this.updateSuccessStory();
  }
  
  updateSuccessStory() {
    this.showsuccessstory1 = this.activeDot === '1';
    this.showsuccessstory2 = this.activeDot === '2';
    this.showsuccessstory3 = this.activeDot === '3';
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = scrollY > 0;
  }
  
}
