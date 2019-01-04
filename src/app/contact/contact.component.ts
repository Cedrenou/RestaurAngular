import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay = '';

  standard = {
    firstName: 'Ben',
    lastName: 'Glouton',
    role: 'Accueil',
    award: '',
    phoneNumber: '02-45-03-04-05'
  };

  sommelier = {
    firstName: 'David',
    lastName: 'Biraud',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2002',
    phoneNumber: '02-47-03-04-05'
  };

  boucher = {
    firstName: 'Seb',
    lastName: 'Coirier',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2015',
    phoneNumber: '02-46-03-04-05'
  };

  constructor() {
  }

  ngOnInit() {
  }

  displayBig(event) {
    console.log(event);
    this.numberToDisplay = event;
  }

}
