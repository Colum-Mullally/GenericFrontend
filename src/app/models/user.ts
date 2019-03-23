import {Pdf} from './pdf';

export class User {
  public id: number;
  public name: string;
  public pdf: Pdf[] ;
  constructor(args: {
    id: number,
    name: string,
    pdf: {
      url: string,
      name: string,
      atrribute: {
          name: string,
          content: string
      }[]
    }[]
  }) {
    this.id = args.id;
    this.name = args.name;
    this.pdf = args.pdf.map(json => new Pdf(json));
  }
}
