import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jim-home',
  templateUrl: './jim-home.component.html',
  styleUrls: ['./jim-home.component.css'],
  
})
export class JimHomeComponent  {

  isdaypassselected: boolean = true;
  ismounthselected: boolean = false;
  isquarterselected: boolean = false;
  isbiselected: boolean = false;
  isannualselected: boolean = false;
  isseeallselected: boolean = false;

  showsuccessstory1: boolean = true;
  showsuccessstory2: boolean = false;
  showsuccessstory3: boolean = false;

  activeDot: string = '1';


  constructor(
    private router:Router
  ) { }

 
  
  onGetStarted(value1: string, value2: string) {
    this.router.navigate(['/package-registration', 'daypassse'], {
      queryParams: { value1, value2 }
    });
  }

  onGetStartedMonthly(value1: string, value2?: string) {
    this.router.navigate(['/package-registration', 'mounthlymounthly'], {
      queryParams: { value1, value2 }
    });
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
      this.isdaypassselected=false;
      this.isbiselected=false;
      
    } else if (text == 'Quarterly') {
      this.ismounthselected = false;
      this.isquarterselected = true;
      this.isannualselected = false;
      this.isseeallselected = false;
      this.isdaypassselected=false;
      this.isbiselected=false;


    }else if (text == 'Annual') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = true;
      this.isseeallselected = false;
      this.isdaypassselected=false;
      this.isbiselected=false;


    }
    else if (text == 'ViewAll') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = false;
      this.isseeallselected = true;
      this.isdaypassselected=false;
      this.isbiselected=false;


    }

    else if (text == 'Daypass') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = false;
      this.isseeallselected = false;
      this.isdaypassselected=true;
      this.isbiselected=false;


    }

    else if (text == 'BiAnnual') {
      this.ismounthselected = false;
      this.isquarterselected = false;
      this.isannualselected = false;
      this.isseeallselected = false;
      this.isdaypassselected=false;
      this.isbiselected=true;


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


  
}
