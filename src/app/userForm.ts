export class UserForm {
    constructor(
      public firstname?: string,
      public lastname?: string,
      public address?: string,
      public email?: string,
      public gender?: string,
      public dateofbirth?:string,
      public city?:string,
      public state?:string,
      public pincode? :string,
      public occupation?:string,
      public role?:string,
    ) {

      this.gender="male";
      this.role="volunteer";
    }
  }