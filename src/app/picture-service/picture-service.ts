import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PictureSources, PictureType } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  constructor(private httpClient: HttpClient) {}

  pictureSources: PictureSources[];

  async fetchPictureSources(type: PictureType): Promise<PictureSources[]> {
    return new Promise((resolve) => {
      this.httpClient
        .get<PictureSources[]>(`../../assets/${type}.json`)
        .subscribe((payload) => {
          resolve(payload);
        });
    });
  }
}
