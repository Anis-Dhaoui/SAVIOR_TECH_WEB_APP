import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentaireComponent } from './get-commentaire.component';

describe('GetCommentaireComponent', () => {
  let component: GetCommentaireComponent;
  let fixture: ComponentFixture<GetCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
