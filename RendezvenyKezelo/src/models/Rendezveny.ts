
export interface IRendezveny {
    nev: string;
    hely: string;
    ido: Date;
    resztvevok: string[];
    tematikusTipus: string;
  }
  
  export class Rendezveny implements IRendezveny {
    constructor(
      public nev: string,
      public hely: string,
      public ido: Date,
      public resztvevok: string[] = [],
      public tematikusTipus: string
    ) {}
  
    addResztvevo(resztvevo: string): void {
      this.resztvevok.push(resztvevo);
    }
  
    removeResztvevo(resztvevo: string): void {
      this.resztvevok = this.resztvevok.filter((r) => r !== resztvevo);
    }
  }
  