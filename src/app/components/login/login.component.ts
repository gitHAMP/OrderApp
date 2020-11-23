import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login.model';
import {IdentityService} from '../../services/identity.service';
import {Router} from '@angular/router';
import {UserStorageService} from '../../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: Login=new Login();
  public invalid:boolean;

  constructor(
    private identityService: IdentityService,
    private userStorageService: UserStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let self = this;

    this.identityService
      .signIn(this.model)
      .subscribe({
        next(data) {
          //console.log(data['body']);
          self.userStorageService.set(data['body']);
          self.router.navigate(['/']);
        },
        error() {
          self.invalid = true;
        }
      });
  }
}
