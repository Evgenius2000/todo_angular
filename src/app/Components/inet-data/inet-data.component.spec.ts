import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InetDataComponent } from './inet-data.component';

describe('InetDataComponent', () => {
  let component: InetDataComponent;
  let fixture: ComponentFixture<InetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
