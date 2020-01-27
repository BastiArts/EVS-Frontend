export class Equipment {
  constructor(
    public id: number = 0,
    public category: string = '',
    public name: string = '',
    public brand: string = '',
    public internenummer: string = '',
    public serialnumber: string = '',
    public usableclasses: string[] = [],
    public photopath: string = '',
    public specs: string[] = [],
    public displayname: string = '',
    public longname: string = '',
    public inventorynumber: string = ''
  ) {
  }
}
