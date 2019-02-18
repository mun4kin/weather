import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output()
  public change = new EventEmitter();
  activeItem = 0;

  constructor() {
  }

  ngOnInit() {
  }

  changeActive(num: number) {
    this.activeItem = num;
    this.change.emit(num);
  }
}
