import React, {Component} from 'react';

class MyCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    number: 1,
                    selected: true
                },
                {
                    number: 2,
                    selected: false
                },
                {
                    number: 2,
                    selected: false
                },
                {
                    number: 3,
                    selected: false
                },
                {
                    number: 3,
                    selected: false
                },
                {
                    number: 3,
                    selected: false
                },
                {
                    number: 4,
                    selected: false
                },
                {
                    number: 4,
                    selected: false
                },
                {
                    number: 4,
                    selected: false
                },
                {
                    number: 5,
                    selected: false
                },
                {
                    number: 5,
                    selected: false
                }
            ]
        };
    };

    render() {
        return (
            <div className="my-card">
                {
                    this.state.cards.map((card) => (
                        <div className={`card${card.selected ? '--selected': ''}`}>{card.number}</div>
                    ))
                }
            </div>
        );
    }
}

export default MyCard;