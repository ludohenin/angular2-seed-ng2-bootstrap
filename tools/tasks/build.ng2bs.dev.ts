import {PATH} from '../config';
import {join} from 'path';
import * as Builder from 'systemjs-builder';

let builder = new Builder({
  defaultJSExtensions: true,
  paths: {
    'ng2-bootstrap/ng2-bootstrap': './node_modules/ng2-bootstrap/ng2-bootstrap',
    'angular2/*': './node_modules/angular2/*',
    '@reactivex/*': './node_modules/@reactivex/*'
  }
});

export = function buildNg2bs(gulp) {
  return function () {
    return builder.bundle('ng2-bootstrap/ng2-bootstrap - angular2/*',
                          join(PATH.dest.dev.lib, 'ng2-bootstrap.js'));
  };
};
