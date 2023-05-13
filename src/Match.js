//import React from 'react';

export const Match = (num) => {
  let string = num.toString();
  let arr = string.split(",");
  let map = arr.map((e) => {
    for (let i = 0; i < e.length; i++) {
      console.log(e[i]);
    }
  });
};
