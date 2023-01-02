import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuestionComponent } from './item-question.component';

describe('ItemQuestionComponent', () => {
  let component: ItemQuestionComponent;
  let fixture: ComponentFixture<ItemQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
