import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReactionComponent } from './get-reaction.component';

describe('GetReactionComponent', () => {
  let component: GetReactionComponent;
  let fixture: ComponentFixture<GetReactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
