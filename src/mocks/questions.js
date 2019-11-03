export const MockData = {
  time: 5,
  mistakes: 3,
  questions: [
    {
      question: `guessArtist`,
      answer: `Rammstein`,
      src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
      variants: [{
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
        id: 1
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Rammstein`,
        id: 2
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
        id: 3
      }]
    },
    {
      question: `guessGenre`,
      answer: `rock`,
      variants: [{
        src: `https://upload.wikimedia.org/wikipedia/en/2/2d/Champions_League_anthem.ogg`,
        genre: `rock`,
        id: 1
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
        genre: `pop`,
        id: 2
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/en/2/2d/Champions_League_anthem.ogg`,
        genre: `jazz`,
        id: 3
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/8/89/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.wav`,
        genre: `rock`,
        id: 4
      }]
    }
  ]
};
