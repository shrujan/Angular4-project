import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialProjectComponent } from './tutorial-project.component';

describe('TutorialProjectComponent', () => {
  let component: TutorialProjectComponent;
  let fixture: ComponentFixture<TutorialProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
