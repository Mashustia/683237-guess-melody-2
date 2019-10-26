export const mockData = {
  time: 5,
  mistakes: 3,
  questions: [
    {
      question: `guessArtist`,
      answer: `Rammstein`,
      variants: [{
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Rammstein`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      }]
    },
    {
      question: `guessGenre`,
      answer: `rock`,
      variants: [{
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
        id: 1
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`,
        id: 2
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`,
        id: 3
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
        id: 4
      }]
    }
  ]
};
