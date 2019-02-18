import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-preloader-lib',
  templateUrl: './preloader-lib.component.html',
  styleUrls: ['./preloader-lib.component.scss']
})
export class PreloaderLibComponent implements OnInit {

  @Input() width?: string;
  @Input() height?: string;
  @Input() radius?: string;
  @Input() padding?: string;
  @ViewChild('box') box: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    if (this.radius) {
      this.box.nativeElement.style.fontSize = this.radius;
      this.box.nativeElement.style.padding = this.padding;
      this.box.nativeElement.style.width = this.width;
      this.box.nativeElement.style.height = this.height;
    }
  }

}
