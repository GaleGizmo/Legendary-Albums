import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAlbumComponent } from './random-album.component';

describe('RandomAlbumComponent', () => {
  let component: RandomAlbumComponent;
  let fixture: ComponentFixture<RandomAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
