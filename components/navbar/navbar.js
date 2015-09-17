import {app} from '../../module.js';

class NavbarController {
  constructor() {

  }

  activate() {
    var scroll = $(window).scrollTop();
  }
}

app.controller('NavbarController', [NavbarController]);
