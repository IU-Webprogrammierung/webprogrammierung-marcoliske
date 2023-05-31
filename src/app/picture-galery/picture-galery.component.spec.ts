import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureGaleryComponent } from './picture-galery.component';

describe('PictureGaleryComponent', () => {
  let component: PictureGaleryComponent;
  let fixture: ComponentFixture<PictureGaleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureGaleryComponent]
    });
    fixture = TestBed.createComponent(PictureGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
