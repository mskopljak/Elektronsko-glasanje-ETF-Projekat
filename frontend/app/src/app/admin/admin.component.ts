import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    console.log('radi');
    this.adminService.getStatus().then((resp) => {
      this.status = JSON.parse(JSON.stringify(resp));
    });
    console.log('rad', this.status);
  }
  status: Status = new Status();

  setElectionStatus(stanjeIzbora: string) {
    let status = new Status();
    status.statusIzbora = stanjeIzbora;
    this.adminService.setStatus(status).then((resp) => {
      let status: Status = JSON.parse(JSON.stringify(resp));
      console.log(status);
      this.refreshPage();
    });
  }

  refreshPage() {
    this.adminService.refreshPage();
  }
  prepareNomination(){
    this.setElectionStatus('0')
  }

  startNomination() {
    this.setElectionStatus('1');
  }

  endNomination() {
    this.setElectionStatus('2');
  }
  startVote() {
    this.setElectionStatus('3');
  }
  endVote() {
    this.setElectionStatus('4');
  }
  moveToElectionList() {
    console.log('nalistu');
    this.router.navigate(['/membersList']);
  }
  moveToListOfCandidates() {
    this.router.navigate(['/candidates']);
  }
  moveToResults() {
    this.router.navigate(['/results']);
  }
  moveToLogin() {
    this.router.navigate(['/login']);
  }
}
