import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PictureSources } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  constructor(private httpClient: HttpClient) {}

  pictureSources: PictureSources[];

  async fetchPictureSources(): Promise<PictureSources[]> {
    return new Promise((resolve) => {
      this.httpClient
        .get<PictureSources[]>('../../assets/pictureData.json')
        .subscribe((payload) => {
          resolve(payload);
        });
    });
  }
}
