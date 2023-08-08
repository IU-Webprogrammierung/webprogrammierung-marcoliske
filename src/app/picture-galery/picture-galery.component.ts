import { Component, OnInit } from '@angular/core';
import { PictureSources } from '../model/model';
import { PictureService } from '../picture-service/picture-service';

@Component({
  selector: 'app-picture-galery',
  templateUrl: './picture-galery.component.html',
  styleUrls: ['./picture-galery.component.css'],
})
export class PictureGaleryComponent implements OnInit {
  constructor(private pictureService: PictureService) {}

  pictureSources: PictureSources[];
  assetsSourceUrl = "../../assets"

  async ngOnInit(): Promise<void> {
    this.pictureSources = await this.pictureService.fetchPictureSources();

    console.log(this.pictureSources);
  }
}
