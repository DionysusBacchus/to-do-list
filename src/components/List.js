import React, { useState } from 'react';
import ListItem from './ListItem';

export default function List({data}) {

    return (
      <div>
      {data.map((item) => (
        <ListItem text={item.text} done={item.done} />
      ))}
      </div>
    );
  }
  