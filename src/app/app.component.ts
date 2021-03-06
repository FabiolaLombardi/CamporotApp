import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm: boolean;
  lastUrl: string;
  constructor(private router: Router) {

  }

  async ngOnInit() {
    await fetch('https://grupo-camporota-api.herokuapp.com/api/')
  }
  

  onActivate(e) {
    console.log(this.router.url)


    if (this.router.url === '/login') {
      this.loginForm = true;
    } else {
      this.loginForm = false;
    }
  }

  

}
