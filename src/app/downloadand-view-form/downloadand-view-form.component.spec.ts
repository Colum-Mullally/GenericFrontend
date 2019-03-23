import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadandViewFormComponent } from './downloadand-view-form.component';

describe('DownloadandViewFormComponent', () => {
  let component: DownloadandViewFormComponent;
  let fixture: ComponentFixture<DownloadandViewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadandViewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadandViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
