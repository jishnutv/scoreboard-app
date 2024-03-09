import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchSetPage } from './match-set.page';

describe('MatchSetPage', () => {
  let component: MatchSetPage;
  let fixture: ComponentFixture<MatchSetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MatchSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
