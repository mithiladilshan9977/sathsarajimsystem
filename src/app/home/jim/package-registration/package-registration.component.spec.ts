import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageRegistrationComponent } from './package-registration.component';

describe('PackageRegistrationComponent', () => {
  let component: PackageRegistrationComponent;
  let fixture: ComponentFixture<PackageRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
