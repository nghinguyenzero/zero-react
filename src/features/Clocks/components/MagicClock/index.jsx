import React from 'react';
import useDigitalClock from '../../hooks/useDigitalClock';
import useMagicColor from '../../hooks/useMagicColor';

import './MagicClock.scss';

MagicClock.propTypes = {};

function MagicClock() {
  const { timeString } = useDigitalClock();
  const color = useMagicColor();

  return (
    <div className="better-clock">
      <p className="better-clock__time" 
        style={{ color: color }}>
        {timeString}
      </p>
    </div>
  );
}

export default MagicClock;