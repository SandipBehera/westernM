import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  public _album: Array<any> = [];

  constructor(
    private modalService: NgbModal,
    private _lightbox: Lightbox
  ) {
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/img/western/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/western/' + i + '.jpg';
      const album = { src: src, caption: caption, thumb: thumb };
      this._album.push(album);
    }
  }
  open(index: number): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
    
  }
  openLightbox(index: number): void {
    this._lightbox.open(this._album, index);
  }

  ngOnInit(): void {}

  closeLightbox(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
