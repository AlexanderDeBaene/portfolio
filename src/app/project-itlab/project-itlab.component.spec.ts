import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItlabComponent } from './project-itlab.component';

describe('ProjectItlabComponent', () => {
  let component: ProjectItlabComponent;
  let fixture: ComponentFixture<ProjectItlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectItlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
