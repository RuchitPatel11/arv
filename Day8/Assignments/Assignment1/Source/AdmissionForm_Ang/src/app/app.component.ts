import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ReactiveForm_Ang';
  constructor(private fb: FormBuilder) {}
  studentList:any[]= [];
  admissionForm = this.fb.group({
    Name: this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      mname: ['', Validators.required],
      lname: ['', Validators.required],
    }),
    Birth: this.fb.group({
      DOB: ['', Validators.required],
      POB: ['', Validators.required],
    }),
    FirstLanguage: ['', Validators.required],
    Address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      PIN: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    }),
    Gender: ['', Validators.required],
    Father: this.fb.group({
      Name: this.fb.group({
        fname: ['', [Validators.required, Validators.minLength(3)]],
        mname: ['', Validators.required],
        lname: ['', Validators.required],
      }),
      Email: ['', [Validators.required, Validators.email]],
      KnowledgeGate: this.fb.group({
        education: ['', Validators.required],
        qualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phoneNo: [
          null,
          [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')],
        ],
      }),
    }),
    Mother: this.fb.group({
      Name: this.fb.group({
        fname: ['', [Validators.required, Validators.minLength(3)]],
        mname: ['', Validators.required],
        lname: ['', Validators.required],
      }),
      Email: ['', [Validators.required, Validators.email]],
      KnowledgeGate: this.fb.group({
        education: ['', Validators.required],
        qualification: ['', Validators.required],
        profession: ['', Validators.required],
        designation: ['', Validators.required],
        phoneNo: [
          null,
          [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')],
        ],
      }),
    }),
    Emergency: this.fb.group({
      relation: ['', Validators.required],
      phoneNo: [
        null,
        [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')],
      ],
    }),
    Reference: this.fb.group({
      address: ['', Validators.required],
      phoneNo: [
        null,
        [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')],
      ],
    }),
  });


  // Personal Information of Student

  get FName() {
    return this.admissionForm.controls.Name.get('fname');
  }
  get MName() {
    return this.admissionForm.controls.Name.get('mname');
  }
  get LName() {
    return this.admissionForm.controls.Name.get('lname');
  }
  get DOB() {
    return this.admissionForm.controls.Birth.get('DOB');
  }
  get POB() {
    return this.admissionForm.controls.Birth.get('POB');
  }
  get FirLang() {
    return this.admissionForm.controls.FirstLanguage;
  }
  get Street() {
    return this.admissionForm.controls.Address.get('street');
  }
  get City() {
    return this.admissionForm.controls.Address.get('city');
  }
  get State() {
    return this.admissionForm.controls.Address.get('state');
  }
  get PIN() {
    return this.admissionForm.controls.Address.get('PIN');
  }
  get Gender() {
    return this.admissionForm.controls.Gender;
  }

  // Get Values of Father Details
  get FathFName() {
    return this.admissionForm.controls.Father.controls.Name.get('fname');
  }
  get FathMName() {
    return this.admissionForm.controls.Father.controls.Name.get('mname');
  }
  get FathLName() {
    return this.admissionForm.controls.Father.controls.Name.get('lname');
  }
  get FEmail() {
    return this.admissionForm.controls.Father.controls.Email;
  }
  get FEducation() {
    return this.admissionForm.controls.Father.controls.KnowledgeGate.get(
      'education'
    );
  }
  get FQualification() {
    return this.admissionForm.controls.Father.controls.KnowledgeGate.get(
      'qualification'
    );
  }
  get FProfession() {
    return this.admissionForm.controls.Father.controls.KnowledgeGate.get(
      'profession'
    );
  }
  get FDesignation() {
    return this.admissionForm.controls.Father.controls.KnowledgeGate.get(
      'designation'
    );
  }
  get FPhoneNo() {
    return this.admissionForm.controls.Father.controls.KnowledgeGate.get(
      'phoneNo'
    );
  }

  // Get Values of Mother Details
  get MothFName() {
    return this.admissionForm.controls.Mother.controls.Name.get('fname');
  }
  get MothMName() {
    return this.admissionForm.controls.Mother.controls.Name.get('mname');
  }
  get MothLName() {
    return this.admissionForm.controls.Mother.controls.Name.get('lname');
  }
  get MEmail() {
    return this.admissionForm.controls.Father.controls.Email;
  }
  get MEducation() {
    return this.admissionForm.controls.Mother.controls.KnowledgeGate.get(
      'education'
    );
  }
  get MQualification() {
    return this.admissionForm.controls.Mother.controls.KnowledgeGate.get(
      'qualification'
    );
  }
  get MProfession() {
    return this.admissionForm.controls.Mother.controls.KnowledgeGate.get(
      'profession'
    );
  }
  get MDesignation() {
    return this.admissionForm.controls.Mother.controls.KnowledgeGate.get(
      'designation'
    );
  }
  get MPhoneNo() {
    return this.admissionForm.controls.Mother.controls.KnowledgeGate.get(
      'phoneNo'
    );
  }

  //Get Values of Emergency Contact Details

  get EmerPhone() {
    return this.admissionForm.controls.Emergency.get('phoneNo');
  }
  get ERelation() {
    return this.admissionForm.controls.Emergency.get('relation');
  }

  //Get Values of Reference Person Details
  get RefPhone() {
    return this.admissionForm.controls.Reference.get('phoneNo');
  }
  get RAddress() {
    return this.admissionForm.controls.Reference.get('address');
  }

  onSubmit(e:SubmitEvent) {
    e.preventDefault() 
    this.studentList.push(this.admissionForm.value)
    console.log(this.studentList);
  }
}
