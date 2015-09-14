import {app} from '../../module.js';

class HomeController {
  constructor() {
    this.name = 'kevin';
  }
}

app.controller('HomeController', [HomeController]);

// export {
//   HomeController
// };
