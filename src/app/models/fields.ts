export class Fields {
  public name: string;
  public content: string;

  constructor( args: {
    name: string,
    content: string
  }) {
    this.name = args.name;
    this.content = args.content;
  }

}
