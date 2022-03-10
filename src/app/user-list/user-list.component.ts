import { Component, OnInit } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [
    { id: 1, name: 'kote', country: 'GE' },
    { id: 2, name: 'giorgi', country: 'GE' },
  ];

  constructor() {}

  toDetails(id: number) {
    console.log('Gamochnda detalebi', id);
    console.log('DetailPagesLoading');
  }

  ngOnInit(): void {}

  goDetails(event) {
    ///detaukls
    console.log(event); ///d/asasa
  }

  deleteUser(id) {
    console.log('washale user', id);
  }
}
