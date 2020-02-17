import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  constructor(private service:UploadService) { }
  download:string=`${API_URL}/filedownload/files/`;
  image:string;

  ngOnInit() {
    this.image=this.service.image;
  }

}
