import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/models';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() userItem: User;
  @Output() emiTdata = new EventEmitter<number>();
  // @Output() emitDeleteUserData = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  emitUserData(id) {
    this.emiTdata.next(id);
  }

  // emitDeleteUser(id) {
  //   this.emitDeleteUserData.next(id);
  // }
}
