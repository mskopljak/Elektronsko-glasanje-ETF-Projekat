import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  korIme: string = '';
  sifra: string = '';

  login() {
    let user: User = {
      idCla: 0,
      imeCla: '',
      prezimeCla: '',
      korIme: this.korIme,
      sifra: this.sifra,
      tip: 0,
      jeGlasao: 0,
      jeKandidovao: 0,
      idMatSek: 0,
      idRegCen: 0,
    };
    this.userService
      .login(user)
      .then((resp) => {
        let user: User = JSON.parse(JSON.stringify(resp));
        if (user != null) {
          localStorage.setItem('logged', JSON.stringify(user));
          switch (user.tip) {
            case 0:
              this.router.navigate(['/admin']);
              break;
            case 1:
              this.adminService.getStatus().then((resp) => {
                let status = JSON.parse(JSON.stringify(resp));
                switch (status.statusIzbora) {
                  case '0':
                    this.toastr.warning('Glasanje nije počelo.');
                    break;
                  case '1':
                    this.router.navigate(['/candidatelist']);
                    break;
                  case '2':
                    this.toastr.warning('Nominacije su završene. Ne mozete vise glasati.');
                    break;
                  case '3':
                    this.router.navigate(['/electionlist']);
                    break;
                  case '4':
                    this.toastr.warning('Izbori su završeni. Ne mozete vise glasati.');
                    break;
                  default:
                    this.router.navigate(['/login']);
                    break;
                }
              });
          }
        }else{
          this.toastr.error('Pogrešno korisničko ime ili lozinka.');
        }
      })
      .catch(() => {
        alert('error');
      });

  }
 

  onKeyDown(event) {
    if (event.keyCode == 13) {
      this.login();
    }
  }
}

