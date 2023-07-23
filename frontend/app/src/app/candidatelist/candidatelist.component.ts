import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { RegCen } from '../models/RegCen';
import { RegcenService } from '../services/regcen.service';
import { District } from '../models/District';
import { UserService } from '../services/user.service';
import { Candidate } from '../models/Candidate';
import { CandResultsService } from '../services/candresults.service';
import { DistrictService } from '../services/district.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidatelist',
  templateUrl: './candidatelist.component.html',
  styleUrls: ['./candidatelist.component.css']
})
export class CandidatelistComponent implements OnInit {

  constructor(private regcenService: RegcenService, private districtService: DistrictService, private userService: UserService, private candResultsService: CandResultsService, private toastr: ToastrService, private router: Router){
  }

  ngOnInit(): void {
    this.user = JSON.parse(""+localStorage.getItem("logged"))
    this.regcenService.regCenName(this.user.idRegCen).then((resp)=>{
      this.regcen = JSON.parse(JSON.stringify(resp));
    })
    this.districtService.districtName(this.user.idMatSek).then((resp)=>{
      this.matsek = JSON.parse(JSON.stringify(resp));
    })
    this.candByDistrict();
  }
  
  redBroj: number = 1;
  user: User = new User();
  regcen: RegCen = new RegCen();
  matsek: District = new District();
  candidatesByDistrict: Candidate[] = [];
  selectedCandidates: Candidate[] = [];
  candidate!: Candidate;
  isConfirmationSubmitted = false;
  isModalOpen = false;
  checkedCandidates: { [key: number]: boolean } = {};

  
  candByDistrict(){
    this.userService.candidatesByDistrict(this.user).then((resp)=>{
      this.candidatesByDistrict = JSON.parse(JSON.stringify(resp));
      this.candidatesByDistrict = this.candidatesByDistrict.map((candidate, index) => {
        return {
          imeCla: candidate.imeCla,
          prezimeCla: candidate.prezimeCla,
          idCla: candidate.idCla, 
          index: index + 1,
        };
      });
      this.candidatesByDistrict.forEach(candidate => {
        this.checkedCandidates[candidate.idCla] = false;
      });
    })
  }

  toggleSelection(idCla: number, event: Event) {
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked && this.selectedCandidates.length >= 2) {
      this.toastr.warning(
        "Imate pravo da kandidujete najviše dva člana"
      );
      (event.target as HTMLInputElement).checked = false;
      return;
    }
    if (isChecked) {
      let checkedCandidate = this.candidatesByDistrict.find(
        (candidate) => candidate.idCla === idCla
      );
      console.log(checkedCandidate);
      this.selectedCandidates.push(checkedCandidate);
    } else {
      let index = this.selectedCandidates.findIndex(
        (candidate) => candidate.idCla === idCla
      );
      if (index !== -1) {
        this.selectedCandidates.splice(index, 1);
        console.log(this.selectedCandidates);
      }
    }
  }

  confirmCandidates() {
    if (this.selectedCandidates.length > 0) {
      this.openModal();
    } else {
      this.toastr.error("Morate odabrati bar jednog kandidata", 'Greška');
    }
  }

  onSubmit() {
  if (!this.isConfirmationSubmitted) {
    this.toastr.error("Morate potvrditi izbor pre slanja.", 'Greška');
    return;
  }
    else{
      this.candResultsService.addSelectedCandidates(this.selectedCandidates).subscribe(()=>{
        this.toastr.success("Uspešno ste izvršili kandidovanje").onHidden.subscribe(() => {
          this.router.navigate(['']);
        });
      })
      this.userService.confirmVote(this.user).then((res)=>{

      })
    }
  }
 
  handleModalClosed(confirmed: boolean) {
    if (confirmed) {
      this.isConfirmationSubmitted = true;
    } else {
      this.reset();
    }
    this.closeModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  reset() {
    this.toastr.info('Izbor je poništen.', 'Poništeno');
    this.selectedCandidates = [];
    this.isConfirmationSubmitted = false;
    this.checkedCandidates = {};
  }
   
}

