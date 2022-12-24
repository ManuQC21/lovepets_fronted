import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDetailComponent } from './solicitud-detail.component';

describe('SolicitudDetailComponent', () => {
  let component: SolicitudDetailComponent;
  let fixture: ComponentFixture<SolicitudDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
