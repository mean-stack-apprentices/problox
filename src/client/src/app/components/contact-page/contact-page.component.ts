import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  loading = false;
  buttonText = "Submit";

  emailFormControl = new FormControl('',Validators.compose([Validators.email,Validators.required]))
  nameFormControl = new FormControl("", Validators.compose([Validators.required]));
  subjectFormControl=new FormControl("",[ Validators.required]);
  textareaFormControl=new FormControl("",[ Validators.required]);



  constructor(private emailService: EmailService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;
    this.buttonText = "Submitting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      subject: this.subjectFormControl.value,
      textarea: this.textareaFormControl.value

    }

    this.emailService.sendEmail(user).subscribe(
      data => {
        let res:any = data;
      },
      err => {
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
        this.nameFormControl.reset();
        this.emailFormControl.reset();
        this.subjectFormControl.reset();
        this.textareaFormControl.reset();
      }
    );
  }

}

