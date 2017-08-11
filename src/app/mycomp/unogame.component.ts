import { Component, OnInit } from '@angular/core';
import { Card, UnoDeck, Player } from '../model/Uno';

@Component({
  selector: 'app-unogame',
  templateUrl: './unogame.component.html',
  styleUrls: ['./unogame.component.css']
})
export class UnogameComponent implements OnInit {

  playerNum: number;
  playerList: Player[] = [];
  deck: UnoDeck;

  constructor() { }

  ngOnInit() {

    this.playerNum = 2;
  }

  public AddPlayers(): void {

    if (this.playerNum < 7) {
      
      this.playerNum++;
    }
  }

  public RemovePlayers(): void {

    if (this.playerNum > 2) {

      this.playerNum--;
    }
  }

  public Start(): void {

    this.playerList = [];

    this.deck = new UnoDeck();

    for (let n = 0; n < this.playerNum; n++) {

      let cards = [];

      for (let i = 0; i < 7; i++) {

        cards[i] = this.deck.take();
      }

      this.playerList.push({

        cards: cards
      });
    }
  }

}
