import Address from './Address';

export class UserForm {
    constructor(
      public id?: string,
      public phoneNumber?:string,
      public firstName?: string,
      public lastName?: string,
      public address :Address = new Address(),
      public email?: string,
      public gender?: string,
      public dateofbirth?:string,
      public occupation?:string,
      public role?:string,
    ) {

      this.gender="male";
      this.role="volunteer";
    }
  }