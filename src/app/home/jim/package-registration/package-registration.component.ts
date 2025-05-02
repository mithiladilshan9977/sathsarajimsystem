import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-registration',
  templateUrl: './package-registration.component.html',
  styleUrls: ['./package-registration.component.css']
})
export class PackageRegistrationComponent implements OnInit {

  packageId: string | null = null;
  value1: string | null = null;
  value2: string | null = null;
  packageName: string = '';
  individualPrice: string = '';
  couplePrice: string = '';
  issignupisclicked: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.packageId = this.route.snapshot.paramMap.get('packageid');
    this.value1 = this.route.snapshot.queryParamMap.get('value1')!;
    this.value2 = this.route.snapshot.queryParamMap.get('value2')!;
    if (this.packageId == 'daypassse') {
      this.packageName = 'Day Pass Package';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;

    } else if (this.packageId == 'mounthlymounthly') {
      this.packageName = 'Monthly Package';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }

    else if (this.packageId == 'mounthlypersonal') {
      this.packageName = 'Monthly Personal Training';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }

    else if (this.packageId == 'quarterlymoringglory') {
      this.packageName = 'Quarterly Morning Glory';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }
    else if (this.packageId == 'quarterlypersonal') {
      this.packageName = 'Quarterly Personal Training';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }
    else if (this.packageId == 'quarterlystepper') {
      this.packageName = 'Quarterly Stepper Package';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }
    else if (this.packageId == 'biannualmorningglory') {
      this.packageName = 'BI Annual Morning Glory';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }
    else if (this.packageId == 'biannualpersonal') {
      this.packageName = 'BI Annual Personal Training';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }
    else if (this.packageId == 'biannualstepper') {
      this.packageName = 'BI Annual Stepper Package';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }

    else if (this.packageId == 'annualmorningglory') {
      this.packageName = 'Annual Morning Glory';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }

    else if (this.packageId == 'annualpersonal') {
      this.packageName = 'Annual Personal Training';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }

    else if (this.packageId == 'annualstepper') {
      this.packageName = 'Annual Stepper Package';
      this.individualPrice = this.value1 ;
      this.couplePrice = this.value2 ;
    }



 
  }

  signupisclicked() {
    this.issignupisclicked = true;
  }
}
