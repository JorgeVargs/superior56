import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled: boolean = false;

  public isShown: boolean;
  public winWidth: number = 992;

  constructor(private location:Location) {
    this.isShown = false;
    if(this.location.path() != ''){
      this.scrolled = true;
    }
    console.log(this.location.path())
  }

  changeState() {
    this.isShown = !this.isShown;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if(this.location.path() == ''){
      this.scrolled = window.pageYOffset > 150;

      if (this.scrolled) {
        this.isShown = false;
      } else{
        this.scrolled = false;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.winWidth = event.target.innerWidth;
  }
}
