import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private messageService: MessageService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      subject: new FormControl('', [Validators.required]),
      msg: new FormControl('', [Validators.required]),
    });
  }

  get form() {
    return this.contactForm.controls;
  }

  checkFormValide(): boolean {
    if (this.contactForm.invalid || this.contactForm.pristine) {
      return true;
    } else {
      return false;
    }
  }

  submit(): void {
    this.contactForm.reset();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Nachricht gesendet. Ich melde mich baldmöglichst bei dir',
      life: 5000,
    });
  }
}
