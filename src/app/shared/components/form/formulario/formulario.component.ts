import { Component, Input, OnInit } from '@angular/core';
import { AlbumI } from 'src/app/core/services/album/models/album.model';
import { Router } from '@angular/router';
import { genreOptions } from '../config/formulario.config';
import { AlbumService } from 'src/app/core/services/album/album.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { notNegativeLength } from '../validators/form-validators';
import { NgxDropzoneComponent } from 'ngx-dropzone/public_api';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone/public_api';
import { CloudinaryImage } from '@cloudinary/url-gen';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  @Input() public album?: AlbumI;
  @Input() public isEditMode: boolean = false;

  public albumForm?: FormGroup;
  public genresOptions: string[] = genreOptions;
  public hasFormError: boolean = false;
  public uploadedImageUrl: string | undefined;
  public errorMessage: string = '';
  public imgSrc: string = '';
  public textSongs: string = '';
  public textDescription: string = '';
  public files: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private albumService: AlbumService
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public handleAlbum() {
    if (this.albumForm?.valid) {
      if (this.isEditMode) {
        this.editAlbum();
      } else {
        this.createAlbum();
      }
      this.albumForm?.reset();
    } else {
      this.hasFormError = true;
    }
  }
  public stringToArray(str: string): string[] {
    return str.split(',').map((value) => value.trim());
  }

  private createAlbum() {
    const songsCheck = this.albumForm?.get('songs');
    if (songsCheck?.value && !Array.isArray(songsCheck?.value)) {
      const songsArray: string[] = this.stringToArray(songsCheck?.value);
      // const songsArray: string[] = songsString
      //   .split(',')
      //   .map((value) => value.trim());
      songsCheck?.setValue(songsArray);
    }

    this.hasFormError = false;
    this.albumService.createAlbum(this.albumForm?.value).subscribe(
      (album) => {
        const continueCreating = window.confirm('¿Quieres añadir otro álbum?');
        if (!continueCreating) {
          this.router.navigate(['../albums-list']);
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  private editAlbum() {
    if (!this.album) {
      return;
    }
    if (this.album) {
      const newSongs = this.albumForm?.get('songs')?.value;

      const newSongsArray: string[] = this.stringToArray(newSongs);

      this.albumForm?.get('songs')?.setValue(newSongsArray);
    }
    this.albumService
      .editAlbum(this.albumForm?.value, this.album.title)
      .subscribe((album) => {
        this.router.navigate(['../albums-list']);
      });
  }

  private initForm() {
    this.albumForm = this.formBuilder.group({
      title: new FormControl(this.album?.title || '', [Validators.required]),
      artist: new FormControl(this.album?.artist || '', [Validators.required]),
      year: new FormControl(this.album?.year || '', [
        Validators.required,
        Validators.max(2023),
        Validators.min(1910),
      ]),
      genre: this.formBuilder.control(this.album?.genre || []),
      cover: new FormControl(this.album?.cover || ''),
      producer: new FormControl(this.album?.producer || ''),
      label: new FormControl(this.album?.label || ''),
      description: new FormControl(this.album?.description || ''),
      songs: new FormControl(this.album?.songs || ''),
      length: new FormControl(this.album?.length || '', [notNegativeLength()]),
    });
    this.textSongs = this.albumForm?.get('songs')?.value;
  this.textDescription = this.albumForm?.get('description')?.value;
  }
  

  public onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      this.albumService.uploadImage(file).subscribe((response) => {
        this.uploadedImageUrl = response.url;

        if (this.albumForm) {
          this.albumForm.patchValue({ cover: this.uploadedImageUrl });
        }
      });
    }
  }
}
