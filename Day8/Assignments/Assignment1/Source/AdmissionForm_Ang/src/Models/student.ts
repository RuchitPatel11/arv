export interface Student {
  Name: {
    FirstName: string;
    MiddleName: string;
    LastName: string;
  };
  Birth: {
    DateOfBirth: Date;
    PlaceOfBirth: string;
  };
  MotherTongue: string;
  Address: {
    Street: string;
    City: string;
    State: string;
    Country: string;
    PIN: number;
  };
  Gender: string;
  Father: {
    Name: {
      FirstName: string;
      MiddleName: string;
      LastName: string;
    };
    Email: string;
    KnowledgeGate: {
      Education: string;
      Qualification: string;
      Profession: string;
      Designation: string;
      PhoneNumber: number;
    };
  };
  Mother: {
    Name: {
      FirstName: string;
      MiddleName: string;
      LastName: string;
    };
    Email: string;
    KnowledgeGate: {
      Education: string;
      Qualification: string;
      Profession: string;
      Designation: string;
      PhoneNumber: number;
    };
  };
}
