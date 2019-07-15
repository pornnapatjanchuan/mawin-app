import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBikePage } from './detail-bike.page';

describe('DetailBikePage', () => {
  let component: DetailBikePage;
  let fixture: ComponentFixture<DetailBikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
