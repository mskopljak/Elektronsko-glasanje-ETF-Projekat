import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<boolean>();

  constructor(private toastr: ToastrService) {}

  modalText = 'Da li potvrđujete izbor?';

  confirm() {
    this.modalClosed.emit(true);
    this.toastr.success('Izbor je potvrđen.', 'Potvrda');
  }
  cancel() {
    this.modalClosed.emit(false);
  }
  closeModal() {
    this.modalClosed.emit(false);
  }
}
