import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  constructor(private service:UploadService) { }
  download:string;
  image:string;

  ngOnInit() {
    this.download=this.service.download;
    this.image=this.service.image;
  }

}
