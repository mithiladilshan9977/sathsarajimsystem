import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJimHomeComponent } from './main-jim-home.component';

describe('MainJimHomeComponent', () => {
  let component: MainJimHomeComponent;
  let fixture: ComponentFixture<MainJimHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJimHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJimHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
