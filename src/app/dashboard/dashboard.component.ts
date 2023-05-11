import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // formSubmit = new FormGroup({
  // Name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  // Email: new FormControl(null, [Validators.required, Validators.email]),
  // PhoneNumber: new FormControl(null, [Validators.required]),
  // Description: new FormControl(null, [Validators.required]),

  // })

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.countDownTimer();
  }
  days: number = 47;
  hours: number = 24;
  minutes: number = 15;
  seconds: number = 34;

  x = setInterval(() => {
    var futureDate = new Date('June 4, 2023 15:34:24').getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));

    this.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(this.hours);
  }, 1000);

  countDownTimer() {}

  // onSave(){
  //   if(!this.formSubmit.valid){
  //     return;
  //   }
  //   console.log(this.formSubmit);
  // }
  onProductCreate(employers: {
    name: string;
    email: string;
    number: string;
    description: string;
  }) {
    console.log(employers);
    this.http.post(
      'http://portfolio-website-6a062-default-rtdb.firebaseio.com/contacts.jason',
      employers
    ).subscribe((res) =>{
      console.log(res);
    });
  }
}
