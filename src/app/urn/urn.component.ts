import { Component, OnInit } from '@angular/core';
import { SuccessModalComponent } from './success-modal/success-modal.component';

import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

@Component({
  selector: 'urn',
  templateUrl: './urn.component.html',
  styleUrls: ['./urn.component.sass']
})
export class UrnComponent implements OnInit {

  private role : {};
  private numpad = [];
  private candidate : any = {};
  private candidates : {}[] = [];

  constructor(
    private db: AngularFirestore,
    private modalService: NgbModal) {
  }

  openModal() {
    let ngbModalOptions: NgbModalOptions = {
          backdrop : 'static',
          keyboard : false,
          // size: "dialog-centered"
    };
    this.modalService.open(SuccessModalComponent, ngbModalOptions);
  }


  ngOnInit() {
    this.role = {
      numbers: 3,
      name: 'Senador'
    }

    this.candidate = this.blankCandidate;
    this.refreshCandidate();
  }

  get blankCandidate(){
    return {
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Interrogation_mark_with_material_shadows.jpg',
      name: '',
      political_party: {}
    };
  }

  refreshCandidate () {
    const numbers = this.getLiteralNumpad();
    const candidates = this.db.collection('candidates', ref => ref.orderBy('number'));

    const candidates$ : Observable<any> = candidates.valueChanges();

    candidates$.subscribe(data => {

      this.candidates = data;

      let _data = Object.keys(data),
          newData = {},
          i = 0;

      _data.forEach(j => {
        if(data[j].number.toString().indexOf(numbers) === 0){
          newData[i] = data[j];
          i++;
        }
      });

      if(Object.keys(newData).length == 1){
        this.candidate = newData[0];
      } else {
        this.candidate = this.blankCandidate;
      }

    });

  }

  getLiteralNumpad() {
    return Number(this.numpad.join(''));
  }

  resetVote() {
    this.numpad = [];
    this.candidate = this.blankCandidate;
  }

  saveVote() {
    let { candidate, blankCandidate } = this;
    if(candidate.name == ''){
      candidate = {
        ...candidate,
        name: "Nulo",
        number: '000'
      };
    }
    const votes = this.db.collection('votes').add(candidate);
    this.openModal();
  }

  numpadNumber(info) {
    let { number, index } = info;
    this.numpad[index] = number;
    this.refreshCandidate();
  }

}
