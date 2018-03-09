import { Injectable } from '@angular/core';

// this decorator allows the service to be injected to other componenets
@Injectable()
export class CommonServiceService {

  private name = 'shrujan';

  constructor() { }

  getName = () => {
    return this.name ;
  }

  setName = (n) => {
    this.name = n;
  }

}
