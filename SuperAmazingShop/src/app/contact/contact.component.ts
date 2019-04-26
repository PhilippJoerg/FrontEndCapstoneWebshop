import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alert(name: string, email: string, subject: string, message: string) {
    // rubric61
    // the validation for the send button
    const forms = document.getElementsByClassName('needs-validation');
    const validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // rubric60
          // the alert that is created from the send button
          alert('Your message was send, \nName: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message);
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
}
