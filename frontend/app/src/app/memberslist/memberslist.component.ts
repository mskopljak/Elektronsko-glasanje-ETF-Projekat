import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberslistService } from '../services/memberslist.service';
import { Members } from '../models/Members';
import { District } from '../models/District';

/*import { ReginalcenterService } from '../services/reginalcenter.service';*/
import { DistrictService } from '../services/district.service';
import { RegCen } from '../models/RegCen';
import { RegcenService } from '../services/regcen.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.css'],
})
export class MemberslistComponent implements OnInit {
  constructor(
    private router: Router,
    private membersslistService: MemberslistService,
    /*private reginalcenterService: ReginalcenterService,*/
    private districtService: DistrictService,
    private regcenService: RegcenService,
    private toaster: ToastrService
  ){}

  ngOnInit(): void {
    this.membersslistService.getList().then((resp) => {
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
    console.log(this.district);
    this.toaster.info(' odaberi Matičnu Sekciju');
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
