
import { Rendezveny } from './models/Rendezveny';
import { RendezvenyKezelo } from './services/RendezvenyKezelo';


const rendezvenyKezelo = new RendezvenyKezelo();
const ujRendezveny = new Rendezveny('Nyári Fesztivál', 'Budapest', new Date('2025-08-15'), [], 'fesztivál');


rendezvenyKezelo.hozzaadRendezveny(ujRendezveny);


rendezvenyKezelo.addResztvevoToRendezveny('Nyári Fesztivál', 'Kovács Anna');
rendezvenyKezelo.addResztvevoToRendezveny('Nyári Fesztivál', 'Nagy Béla');
rendezvenyKezelo.addResztvevoToRendezveny('Nyári Fesztivál', 'Szabó Csaba');


console.log('Nyári Fesztivál résztvevői:', ujRendezveny.resztvevok);
console.log('Tematikus "fesztivál" rendezvények:', rendezvenyKezelo.tematikusRendezvenyek('fesztivál'));
