import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JimHomeComponent } from './jim-home.component';

describe('JimHomeComponent', () => {
  let component: JimHomeComponent;
  let fixture: ComponentFixture<JimHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JimHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JimHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
