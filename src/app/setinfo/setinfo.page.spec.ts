import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetinfoPage } from './setinfo.page';

describe('SetinfoPage', () => {
  let component: SetinfoPage;
  let fixture: ComponentFixture<SetinfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
