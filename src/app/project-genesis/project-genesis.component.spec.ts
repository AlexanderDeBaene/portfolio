import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGenesisComponent } from './project-genesis.component';

describe('ProjectGenesisComponent', () => {
  let component: ProjectGenesisComponent;
  let fixture: ComponentFixture<ProjectGenesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectGenesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGenesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
