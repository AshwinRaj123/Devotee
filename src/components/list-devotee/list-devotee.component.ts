import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-devotee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './list-devotee.component.html',
  styleUrl: './list-devotee.component.scss'
})
export class ListDevoteeComponent implements OnInit {

  devoteeForm!: FormGroup;
  devoteeDetails : string[] = [];
  malayalamStar = [
    "Ashwathi", "Bharani", "Karthika","Rohini","Magayiram","Thiruvathira","Punartham",
    "Pooyyam","Aayillyam","Makham","Pooram","Uthram","Attham","Chithira","Chothi","Vishakam",
    "Anizham","Thrikketta","Moolam","Pooradam","Utthiradam","Thiruvonam","Avittam","Chathayam",
    "Pooruruttathi", "Utharattathi", "Revati"
  ]

  constructor(private fb: FormBuilder, private toastr: ToastrService){}

  ngOnInit() {
    this.devoteeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      dob: new FormControl(''),
      relationship: new FormControl('', Validators.required),
      star: new FormControl('', Validators.required),
      familyMembers: this.fb.array([])

    })
  }

  get familyMembers(): FormArray{
    return this.devoteeForm.get('familyMembers') as FormArray
  }

  addFamilyMember(){
    const family = this.fb.group({
      relationName : [''],
      relationDob : [''],
      relationType: [''],
      relationStar: ['']
    })
    this.familyMembers.push(family)
  }

  removeFamilyMember(index: number){
    this.familyMembers.removeAt(index)
  }

  onSubmit() {
    if (this.devoteeForm.valid) {
      console.log(this.toastr);
      this.devoteeDetails.push(this.devoteeForm.value)
      localStorage.setItem('devoteData',JSON.stringify(this.devoteeDetails))
      this.devoteeForm.reset()
      this.toastr.success('Devotee created successfully!', 'Success');
    } else {
      console.log('Form is invalid');
    }
  }

}
