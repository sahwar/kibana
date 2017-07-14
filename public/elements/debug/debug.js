import { Element } from '../element';
import ReactDOM from 'react-dom';
import React from 'react';
import header from './header.png';

module.exports = new Element('debug', {
  displayName: 'Debug',
  description: 'Just dumps the configuration of the element',
  image: header,
  expression: 'demodata().render(as=debug)',
  render(domNode, config, done) {
    ReactDOM.render(
      <div style={{ overflow: 'auto', height: '100%' }}>
        <pre>{JSON.stringify(config, null, ' ')}</pre>
      </div>, domNode);
    done();
  },
});
