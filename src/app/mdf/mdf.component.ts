import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { contact } from './contact';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent  implements OnInit {

   model = new contact('', '','' ,'','','')
  constructor() { }

  ngOnInit() {
  }


  /*Mobile validation not allowed to type characters*/

  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

}


// myContactForm=new FormGroup({
//   name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
//   email:new FormControl(),
//   mob:new FormControl(),
//   company:new FormControl(),
//   city:new FormControl(),
//   comment:new FormControl()
//   });
   
  // onSubmit(){

  //   console.log(this.myContactForm.value);
  // }

