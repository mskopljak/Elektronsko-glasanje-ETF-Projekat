import { Component, OnInit } from '@angular/core';
import { MemberslistService } from '../services/memberslist.service';
import { Router } from '@angular/router';
import { Members } from '../models/Members';

import { DistrictService } from '../services/district.service';
import { District } from '../models/District';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RegcenService } from '../services/regcen.service';
import { RegCen } from '../models/RegCen';

@Component({
  selector: 'app-voteresults',
  templateUrl: './voteresults.component.html',
  styleUrls: ['./voteresults.component.css'],
})
export class VoteresultsComponent implements OnInit {
  constructor(
    private router: Router,
    private membersslistService: MemberslistService,
    private regcenService: RegcenService,
    private districtService: DistrictService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.membersslistService.getResults().then((resp) => {
      this.members = JSON.parse(JSON.stringify(resp));
      console.log(this.members);
    });

    this.regcenService.getCenter().then((resp) => {
      this.center = JSON.parse(JSON.stringify(resp));
      console.log(this.members);
    });

    this.districtService.getDistrict().then((resp) => {
      this.district = JSON.parse(JSON.stringify(resp));
      console.log(this.district);
      this.shownDistricts = JSON.parse(JSON.stringify(resp));
    });
  }
  showCenter(center: RegCen) {
    console.log('idRegCen', center);
    this.toaster.info(' odaberi Matičnu Sekciju');
    console.log(this.district);
    this.shownDistricts = [];
    for (const [key, district] of this.district.entries()) {
      if (district.idRegCen == center.idRegCen) {
        this.shownDistricts.push(district);
      }
    }
  }
  showDistrict(district: District) {
    console.log('IdMatSek', district);
    this.shownMembers = [];
    for (const [key, members] of this.members.entries()) {
      if (members.idMatSek == district.idMatSek) {
        this.shownMembers.push(members);
      }
    }
  }
  goBack() {
    this.router.navigate(['/admin']);
  }
  district: District[]; //svi iz baze
  center: RegCen[];
  shownDistricts: District[]; //samo za pokazivanje

  members: Members[];
  shownMembers: Members[];
}
