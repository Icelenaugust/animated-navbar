import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed = false;
  init = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    mouseEnter(navTitle: HTMLElement){
      navTitle.style.opacity = "1";
      console.log("mouse entered!");
  }

  mouseLeave(navTitle: HTMLElement){
    navTitle.style.opacity = "0";
    console.log('mouse left!');
  }

  btnClick(path: string) {
    this.router.navigateByUrl(path);
  }

  toggle(menu: HTMLElement) {
    const list = Array.prototype.slice.call(menu.children) as HTMLElement[];
    this.init = true;
    this.collapsed = !this.collapsed;

    gsap.to(menu, {
      translateY: 0,
      duration: 0.6,
    });
    this.animateElements(this.collapsed, list, menu);
    
  }

  private animateElements(collapsed: boolean, list: HTMLElement[], menu: HTMLElement): void {
    if (collapsed) {
      for (let i = 0; i < list.length; i++) {
        const sliced = list.slice(i, list.length);
        gsap.to(sliced, {
          translateY: 60 * i,
          delay: 0.3 * i,
          duration: 0.6
        });
      }
    } else {
      gsap.to(list, {
        y: 0,
        duration: 0.3
      }).then(() => {
        gsap.to(menu, {
          translateY: -80,
          duration: 0.3
        })
      })
    }
  }

}
