/**
 * Something should be put here
 * 
 */

// Button callback
var onCardButtonClick = function(t, opts) {

    return t.popup({
        title: 'Task',
        items: [
            {
                text: 'Sync',
                callback: function (t, opts) {
                    t.card('all')
                        .then(function (card) {
                            // Fetch data from backend
                            // console.log([card.id, card.name, card.desc, card.dateLastActivity]);
                        });
                }
            }
        ]
    });
}

var onBoardButtonClick = function (t, opts) {
    alert('Hey! Stop that!');
}

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, opts) {
    return [{
      icon: '',
      text: 'Link to Project',
      callback: onCardButtonClick
    }];
  },
  'card-badges': function (t, opts) {
      return t.card('all')
        .then(function (card) {
            // console.log(card);

            return {
                title: 'Hello',
                text: 'Status',
                color: 'green',
            };
        });
  },
  'board-buttons': function (t, opts) {
      return [{
          icon: '',
          text: 'Project',
          callback: onBoardButtonClick
      }];
  }
});