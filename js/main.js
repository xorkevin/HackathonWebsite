import angular from 'angular';
import router from 'angular-new-router';
import {app} from '../module.js';
// import {HomeController} from '../components/home/home';
// import {NavbarController} from '../components/navbar/navbar';
import '../components/home/home';
import '../components/navbar/navbar';

class AppController {
  constructor($router){
    $router.config([
      {path: '/home', component: 'home'},
      {path: '/', redirectTo: '/home'}
    ]);
    this.world = 'Hello, world!';
  }
}

app.controller('AppController', ['$router', AppController]);
  // .controller('HomeController', [HomeController])
  // .controller('NavbarController', [NavbarController]);
