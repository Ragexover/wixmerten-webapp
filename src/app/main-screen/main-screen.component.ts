import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {
  
  constructor(private router: Router) {}

  coffeeOnClick() {
    this.router.navigate(['coffee']);
  }

  bibleOnClick() {

  }
}
