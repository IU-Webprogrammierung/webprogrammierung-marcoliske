import { Component, OnInit } from '@angular/core';
import { PictureSources, PictureType } from '../model/model';
import { PictureService } from '../picture-service/picture-service';
import { Layout, LayoutState } from 'src/store/layout/layout.state';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';

@Component({
  selector: 'app-picture-galery',
  templateUrl: './picture-galery.component.html',
  styleUrls: ['./picture-galery.component.css'],
})
export class PictureGaleryComponent implements OnInit {
  constructor(private pictureService: PictureService) {}
  @ViewSelectSnapshot(LayoutState.layout)
  layout: Layout;

  layoutRef = Layout;

  pictureSources: PictureSources[];
  assetsSourceUrl = '../../assets';

  async ngOnInit(): Promise<void> {
    this.pictureSources = await this.pictureService.fetchPictureSources(
      PictureType.GALLERY
    );
  }
}
