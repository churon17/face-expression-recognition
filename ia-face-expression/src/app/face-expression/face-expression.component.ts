import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as tmImage from '@teachablemachine/image';

@Component({
  selector: 'app-face-expression',
  templateUrl: './face-expression.component.html',
  styleUrls: ['./face-expression.component.css']
})
export class FaceExpressionComponent implements OnInit {

  currentExpression : any = {className : 'Cargando...', probability : 0.0};

  isWebEnabled : boolean = false;
  isFileUpload : boolean = false;

  probability : any = 0;

  file: File;

  imgURL : any;

  imagePath : any;

  //https://teachablemachine.withgoogle.com/models/1tYwDDqxp/
  url = './assets/model/';
  model;
  predictions;
  webcam; 
  maxPredictions;

  @ViewChild('video', { static: false }) video: ElementRef<HTMLImageElement>;

  async ngAfterViewInit() {
      const modelURL = this.url + 'model.json';
      const metadataURL = this.url + 'metadata.json';
      this.model = await tmImage.load(modelURL, metadataURL);
      this.maxPredictions = this.model.getTotalClasses();
  }

  async loop() {
    this.webcam.update(); // update the webcam frame
    this.predictions = await this.model.predict(this.webcam.canvas,  true);
    this.getCurrentExpression();
    if(this.isFileUpload){ 
      this.webcam.stop();
      return; 
    }
    requestAnimationFrame(() =>
        this.loop()
    ); 
  }

  getCurrentExpression(): void {
    const sortExpressions = this.predictions.sort((a,b) => a.probability - b.probability);
    this.currentExpression = sortExpressions[sortExpressions.length - 1];
    this.probability = this.currentExpression.probability * 100;
  }

  async activateWebCam() {
    this.isWebEnabled = true;
    this.isFileUpload = false;

    setTimeout(() => {
      this.video.nativeElement.appendChild(this.webcam.canvas);      
    }, 2000);

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam 
    this.webcam = new tmImage.Webcam(200, 200, flip);
    await this.webcam.setup(); // request access to the webcam
    await this.webcam.play();
    requestAnimationFrame(() =>
      this.loop()
    );
  }

  uploadFile(files : FileList) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }

    this.isFileUpload = true;
    this.isWebEnabled = false;

    let imageObj = new Image();
    let reader = new FileReader();
    this.imagePath = files;
    
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      imageObj.src = this.imgURL;
      
      setTimeout(async() => {
        this.predictions = await this.model.predict(imageObj,  true);
        this.getCurrentExpression();
      }, 300);
    }
  }

  ngOnInit(): void {
  }

}
