import { Component, OnInit } from '@angular/core';
import { Voting } from '../models/Voting';
import { VotingService } from '../services/voting.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { Candidate } from '../models/Candidate';
import { ToastrService } from 'ngx-toastr';
import { DistrictService } from '../services/district.service';
import { District } from '../models/District';
import { RegCen } from '../models/RegCen';
import { RegcenService } from '../services/regcen.service';

@Component({
  selector: 'app-electionlist',
  templateUrl: './electionlist.component.html',
  styleUrls: ['./electionlist.component.css'],
})
export class ElectionlistComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private voteService: VotingService,
    private toastr: ToastrService,
    private district: DistrictService,
    private regCenter: RegcenService
  ) {}

  izabraniKandidati: Candidate[] = [];
  selektovaniKandidati: { [key: number]: boolean } = {};
  potvrdjeniKandidati: Candidate[] = [];

  user: User = new User();
  regcen: RegCen = new RegCen();
  matsek: District = new District();

  isModalOpen = false;
  isConfirmationSubmitted = false;
  // showToast=false;
  // toastMssg= this.toastr.success("Uspesno glasanje.")

  ngOnInit(): void {
    this.user = JSON.parse('' + localStorage.getItem('logged'));

    this.regCenter.regCenName(this.user.idRegCen).then((res) => {
      this.regcen = JSON.parse(JSON.stringify(res));
    });

    this.district.districtName(this.user.idMatSek).then((res) => {
      this.matsek = JSON.parse(JSON.stringify(res));
    });

    this.userService.getElectedCandidates().then((res) => {
      this.izabraniKandidati = JSON.parse(JSON.stringify(res));

      this.izabraniKandidati.forEach((kandidat, index) => {
        kandidat.index = index + 1;

        this.selektovaniKandidati[kandidat.idCla] = false;
      });
    });
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

  addToListSelectedCandidate(idCla: number, event: Event) {
    let isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked && this.potvrdjeniKandidati.length >= 5) {
      this.toastr.warning(
        'Maksimalan broj kandidata za koje mozete glasati je 5!'
      );
      (event.target as HTMLInputElement).checked = false;
      return;
    }
    if (isChecked) {
      let selektovaniKandidat = this.izabraniKandidati.find(
        (kandidat) => kandidat.idCla === idCla
      );
      console.log(selektovaniKandidat);
      this.potvrdjeniKandidati.push(selektovaniKandidat);
    } else {
      let index = this.potvrdjeniKandidati.findIndex(
        (kandidat) => kandidat.idCla === idCla
      );
      if (index !== -1) {
        this.potvrdjeniKandidati.splice(index, 1);
        console.log(this.potvrdjeniKandidati);
      }
    }
  }

  confirmeCandidates() {
    if (this.potvrdjeniKandidati.length > 0) {
      this.openModal();
    } else {
      this.toastr.error('Niste izabrali nijednog kandidata.', 'Greška');
    }
  }

  addVote() {
    if (!this.isConfirmationSubmitted) {
      this.toastr.error('Morate potvrditi izbor pre slanja.', 'Greška');
      return;
    }
    let vote: Voting[] = this.potvrdjeniKandidati.map((kandidat) => ({
      idCla: kandidat.idCla,
      brojGlasova: 1,
    }));
    this.voteService.addVote(vote).then((res) => {
      this.userService.isVoteStatus(this.user).then((res) => {
        this.toastr.success('Uspesno glasanje').onHidden.subscribe(() => {
          this.router.navigate(['']);
          localStorage.clear();
        });
      });
    });
  }

  reset() {
    this.toastr.info('Izbor je poništen.', 'Poništeno');
    this.potvrdjeniKandidati = [];
    this.selektovaniKandidati = {};
    this.isConfirmationSubmitted = false;
  }
}
