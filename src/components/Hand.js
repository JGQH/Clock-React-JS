//Code from: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
import { useState, useEffect } from 'react';

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
}

const Hand = params => {
    const x = params.x
    const y = params.y
    const radius = params.radius
    const color = params.color

    let start, end, largeArcFlag;

    function setHand(){
        start = polarToCartesian(x, y, radius, params.value);
        end = polarToCartesian(x, y, radius, 0);

        largeArcFlag = params.value - 0 <= 180 ? "0" : "1";
    }

    setHand()

    return (
        <path d={`M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`} fill="none" stroke={color} strokeWidth="10"/>
    );
}

export default Hand