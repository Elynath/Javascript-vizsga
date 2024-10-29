import { Rendezveny } from '../models/Rendezveny';

export class RendezvenyKezelo {
  private rendezvenyek: Rendezveny[] = [];


  hozzaadRendezveny(rendezveny: Rendezveny): void {
    this.rendezvenyek.push(rendezveny);
  }


  torolRendezveny(nev: string): void {
    this.rendezvenyek = this.rendezvenyek.filter(r => r.nev !== nev);
  }


  szerkesztRendezveny(nev: string, updatedRendezveny: Rendezveny): void {
    const index = this.rendezvenyek.findIndex(r => r.nev === nev);
    if (index !== -1) {
      this.rendezvenyek[index] = updatedRendezveny;
    }
  }


  tematikusRendezvenyek(tematikusTipus: string): Rendezveny[] {
    return this.rendezvenyek.filter(r => r.tematikusTipus === tematikusTipus);
  }


  addResztvevoToRendezveny(rendezvenyNev: string, resztvevo: string): void {
    const rendezveny = this.rendezvenyek.find(r => r.nev === rendezvenyNev);
    if (rendezveny) {
      rendezveny.addResztvevo(resztvevo);
    }
  }


  removeResztvevoFromRendezveny(rendezvenyNev: string, resztvevo: string): void {
    const rendezveny = this.rendezvenyek.find(r => r.nev === rendezvenyNev);
    if (rendezveny) {
      rendezveny.removeResztvevo(resztvevo);
    }
  }
}
