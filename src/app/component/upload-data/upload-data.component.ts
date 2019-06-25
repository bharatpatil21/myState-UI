import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedFile: any;
  fileChanged(event) {
    this.selectedFile = event.target;
    console.log('selectedFile----',this.selectedFile)
    // const fileReader = new FileReader();
    // fileReader.readAsText(this.selectedFile, "UTF-8");
    // fileReader.onload = () => {
    //  console.log(JSON.parse(fileReader.result));
    // }
    // fileReader.onerror = (error) => {
    //   console.log(error);
    // }
  }
}
