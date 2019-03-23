import {Fields} from './fields';

export class Pdf {
  public name: string;
  public url: string;
  public attributes: Fields[] ;
  constructor(
    args: {
    url: string,
    name: string,
    atrribute: {
      name: string,
      content: string
    }[]
    }) {
    this.name = args.name;
    this.url = args.url;
    this.attributes = args.atrribute.map(json => new Fields (json));
  }
}
