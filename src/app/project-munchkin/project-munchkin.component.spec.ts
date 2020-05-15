import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMunchkinComponent } from './project-munchkin.component';

describe('ProjectMunchkinComponent', () => {
  let component: ProjectMunchkinComponent;
  let fixture: ComponentFixture<ProjectMunchkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMunchkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMunchkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
