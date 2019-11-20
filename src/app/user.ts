import {Equipment} from "./equipment";

export class User {
  constructor(public username: string = '',
              public firstname: string = '',
              public lastname: string = '',
              public email: string = '',
              public schoolclass: string = '',
              public isStudent: boolean = false,
              public picturePath: string = '') {
  }
}
