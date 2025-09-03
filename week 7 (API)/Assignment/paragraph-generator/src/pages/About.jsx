import React from "react";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <ul>
        <li>
          <strong>SPA (Single Page Application):</strong> An app that loads a
          single HTML page and dynamically updates content without reloading.
        </li>
        <li>
          <strong>Client-side Bundle:</strong> The JavaScript code sent to the
          browser to run the app.
        </li>
        <li>
          <strong>Client-side Routing:</strong> Navigation handled in the
          browser using libraries like React Router.
        </li>
        <li>
          <strong>React Router DOM:</strong> Library for routing in React apps.
        </li>
        <li>
          <strong>Prop Drilling:</strong> Passing data through many layers of
          components via props.
        </li>
        <li>
          <strong>Context API:</strong> React feature for sharing state globally
          without prop drilling.
        </li>
        <li>
          <strong>Recoil:</strong> State management library for React,
          alternative to Context API and Redux.
        </li>
        <li>
          <strong>Lazy Loading & Suspense:</strong> Load components only when
          needed for better performance.
        </li>
      </ul>
    </div>
  );
}

export default About;
