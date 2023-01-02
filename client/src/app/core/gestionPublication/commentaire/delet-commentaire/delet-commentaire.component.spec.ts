import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletCommentaireComponent } from './delet-commentaire.component';

describe('DeletCommentaireComponent', () => {
  let component: DeletCommentaireComponent;
  let fixture: ComponentFixture<DeletCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
