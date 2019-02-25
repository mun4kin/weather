import {Component, Input, OnInit} from '@angular/core';
import { ISoc } from '../../store/reducers/hotel.reducer';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input()
  public social_info: ISoc;

  constructor() {
  }

  ngOnInit() {
  }

}
