import { Address } from "./userFormAddress";

export class User{
    ContactPerson: string;
    ContactNumber: number;
    CompnayName: string;
    CompanyAddress: Address;
    CompanyEmail: string;
    constructor(){
        this.ContactPerson="";
        this.ContactNumber=0;
        this.CompnayName="";
        this.CompanyAddress=new Address();
        this.CompanyEmail="";
    }
}