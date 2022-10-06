import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemenupageComponent } from './singlemenupage.component';

describe('SinglemenupageComponent', () => {
  let component: SinglemenupageComponent;
  let fixture: ComponentFixture<SinglemenupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglemenupageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglemenupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
