import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReponsesComponent } from './item-reponses.component';

describe('ItemReponsesComponent', () => {
  let component: ItemReponsesComponent;
  let fixture: ComponentFixture<ItemReponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
