import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSotfComponent } from './project-sotf.component';

describe('ProjectSotfComponent', () => {
  let component: ProjectSotfComponent;
  let fixture: ComponentFixture<ProjectSotfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSotfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSotfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
