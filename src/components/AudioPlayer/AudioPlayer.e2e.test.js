import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './AudioPlayer';

Enzyme.configure({adapter: new Adapter()});

it(`Button click change state`, () => {
  const isStopped = false;
  const isPlayed = false;

  const audioPlayer = mount(
      <AudioPlayer
        isPlaying={isStopped}
        src={``}
        onPlayButtonClick={jest.fn()}
      />
  );

  const button = audioPlayer.find(`.track__button`);
  expect(audioPlayer.state(`isPlaying`)).toEqual(isStopped);

  button.simulate(`click`);
  expect(audioPlayer.state(`isPlaying`)).toEqual(isPlayed);

  button.simulate(`click`);
  expect(audioPlayer.state(`isPlaying`)).toEqual(isStopped);
});
