import React from 'react';
import loadable from '@loadable/component';

export default function About() {
  const componentName = 'SomeLoadableComponent';
  const LoadableComponent = loadable(() => import(`../component/${componentName}`));

  return (
    <div>
      <h1>About</h1>
      <LoadableComponent />
    </div>
  );
}
