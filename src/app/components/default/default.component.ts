import { Component, OnInit } from '@angular/core';
import {SessionUser} from '../../models/session-user.model';
import {UserStorageService} from '../../services/user-storage.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public user: SessionUser;

  constructor(private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    this.user=this.userStorageService.user;
  }

}
