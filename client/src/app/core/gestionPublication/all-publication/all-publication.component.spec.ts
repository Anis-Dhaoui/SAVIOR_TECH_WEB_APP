import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublicationComponent } from './all-publication.component';

describe('AllPublicationComponent', () => {
  let component: AllPublicationComponent;
  let fixture: ComponentFixture<AllPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
