import { Component, ViewChild } from '@angular/core';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent {

  public webcamImage: WebcamImage | any;

  @ViewChild('webcam') webcamElement: any;

  constructor() {}

  public captureImage(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.webcamElement.startVideo();
        this.webcamElement.imageAsDataUrl.subscribe((dataUrl: string) => {
          this.webcamImage = dataUrl;
          this.webcamElement.stopVideo();
        });
      })
      .catch((error: any) => console.error('Error accessing media devices', error));
  }

}
