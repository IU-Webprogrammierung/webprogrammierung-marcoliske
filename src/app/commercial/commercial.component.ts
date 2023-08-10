import { Component, OnInit } from '@angular/core';
import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot';
import { Layout, LayoutState } from 'src/store/layout/layout.state';
import { PictureSources, PictureType } from '../model/model';
import { PictureService } from '../picture-service/picture-service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
})
export class CommercialComponent implements OnInit {
  constructor(private pictureService: PictureService) {}
  @ViewSelectSnapshot(LayoutState.layout)
  layout: Layout;

  layoutRef = Layout;

  pictureSources: PictureSources[];
  assetsSourceUrl = '../../assets';

  async ngOnInit(): Promise<void> {
    this.pictureSources = await this.pictureService.fetchPictureSources(
      PictureType.COMMERCIAL
    );
  }
}
