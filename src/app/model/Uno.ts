export interface Card {

    value: number;

    color: string;

    imageUrl: string

};



export interface Player {

    cards: Card[]
}


export class UnoDeck {

    private static COLOR: string[] = ["red", "yellow", "green", "blue"];

    private cards: Card[] = [];

    constructor() {
        //create the deck
        //add 4 "0" cards
        for (let c = 0; c < UnoDeck.COLOR.length; c++) {

            this.cards.push({

                value: 0,

                color: UnoDeck.COLOR[c],

                imageUrl: "/assets/unocards/c" + c + "_00" + ".png"

            })

        }

        //add wild/wild+4 cards
        for (let i = 0; i < 4; i++) {

            this.cards.push({

                value: 13,

                color: "wild",

                imageUrl: "/assets/unocards/c4_00.png"

            })



            this.cards.push({

                value: 14,

                color: "wild+4",

                imageUrl: "/assets/unocards/c4_01.png"

            })

        }



        //create the main deck

        for (let i = 0; i < 2; i++) {

            for (let c = 0; c < UnoDeck.COLOR.length; c++) {

                for (let j = 1; j < 13; j++) {

                    let prefix: string = "0";



                    if (j < 10) {

                        prefix = prefix + j;

                    }

                    else

                        prefix = j + "";



                    this.cards.push({

                        value: j + 1,

                        color: UnoDeck.COLOR[c],

                        imageUrl: "/assets/unocards/c" + c + "_" + prefix + ".png"

                    })

                }

            }

        }

        this.shuffle(this.cards.length);

    }



    private shuffle(times: number): void {

        // Using Math.round() will give you a non-uniform distribution!

        function getRandomCard(min, max) {

            return Math.floor(Math.random() * (max - min + 1) + min);

        }

        //Change the place of cards[i] to a random card
        for (let i = 0; i < times; i++) {

            var p1: number = getRandomCard(i, this.cards.length - 1);

            var t: Card = this.cards[p1];

            this.cards[p1] = this.cards[i];

            this.cards[i] = t;

        }

    }



    public take(): Card {

        return (this.cards.pop());

    }

}