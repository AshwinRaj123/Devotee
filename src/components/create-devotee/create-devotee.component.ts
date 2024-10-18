import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface FamilyMember {
  relationName: string;
  relationDob: string;
  relationType: string;
  relationStar: string;
}

interface Devotee {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  dob: string;
  relationship: string;
  star: string;
  familyMembers: FamilyMember[];
}


@Component({
  selector: 'app-create-devotee',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './create-devotee.component.html',
  styleUrl: './create-devotee.component.scss'
})


export class CreateDevoteeComponent implements OnInit{

  devoteeList: Devotee[] = [];

  ngOnInit(): void {
    this.devoteeList = JSON.parse(localStorage.getItem('devoteData') || '[]')
    console.log('*****',this.devoteeList)
  }

}
