import {Equipment} from "./equipment";
import {User} from "./user";

export class Entlehnung {
  constructor(public id: number = 0,
              public fromdate: Date = null,
              public todate: Date = null,
              public status: string = '',
              public approved: boolean = false,
              public user: User,
              public equ: Equipment) {
  }
}
