import angular from 'angular';
import router from 'angular-new-router';
import {app} from '../module.js';
import '../components/home/home';
import '../components/navbar/navbar';
import '../components/footer/footer';
import '../components/header/header';

class AppController {
  constructor($router){
    $router.config([
      {path: '/home:section', components: {
        'header': 'header',
        'main': 'home',
        'nav': 'navbar',
        'footer': 'footer'
      }},
      {path: '/', redirectTo: '/home'}
    ]);
    this.world = 'Hello, world!';
  }
}

app.controller('AppController', ['$router', AppController]);