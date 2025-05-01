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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.packageId = this.route.snapshot.paramMap.get('packageid');
    this.value1 = this.route.snapshot.queryParamMap.get('value1');
    this.value2 = this.route.snapshot.queryParamMap.get('value2');

    console.log('Package ID:', this.packageId);
    console.log('Value 1:', this.value1);
    console.log('Value 2:', this.value2);
  }

}
