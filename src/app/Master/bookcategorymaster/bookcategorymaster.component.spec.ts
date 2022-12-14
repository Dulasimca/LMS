import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcategorymasterComponent } from './bookcategorymaster.component';

describe('BookcategorymasterComponent', () => {
  let component: BookcategorymasterComponent;
  let fixture: ComponentFixture<BookcategorymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcategorymasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcategorymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
