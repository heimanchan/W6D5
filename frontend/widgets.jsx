import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import ClockPicture from './clockPicture';
import Happy from './happy';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div className="main flex">
      <h1 className="header">Welcome to the <span>Johnson's</span> Widget Webpage</h1>
      <ClockPicture />
      <Clock />
      <Happy />

      <Tabs myTabs={tabs}/>
    </div>
    , root
  )
})

let tabs = [
  { title: "parents", content: "jana & ned" },
  { title: "children", content: "sally & timmy & billy" },
  { title: "dogs", content: "bill" }
];
