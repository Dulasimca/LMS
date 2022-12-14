import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionmasterComponent } from './editionmaster.component';

describe('EditionmasterComponent', () => {
  let component: EditionmasterComponent;
  let fixture: ComponentFixture<EditionmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
