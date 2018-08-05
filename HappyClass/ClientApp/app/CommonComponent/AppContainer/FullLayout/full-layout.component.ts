import { Component, ChangeDetectorRef, RendererFactory2, OnInit, EventEmitter, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
//import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll'
import { AccountServicce } from '../../../Services/AccountService';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import 'rxjs/add/observable/fromEvent';
import { fadeAnimation, leftAnimation, listItemAnimation, animateList } from '../../../appAnimation/fadeAnimation';

@Component({
  selector: 'app',
  templateUrl: 'full-layout.component.html',
  styleUrls: ['full-layout.component.css'],
  animations: [fadeAnimation, leftAnimation, listItemAnimation, animateList
    //trigger('fadeAnimation', [
    //  // The '* => *' will trigger the animation to change between any two states
    //  transition('* => *', [
    //    // The query function has three params.
    //    // First is the event, so this will apply on entering or when the element is added to the DOM.
    //    // Second is a list of styles or animations to apply.
    //    // Third we add a config object with optional set to true, this is to signal
    //    // angular that the animation may not apply as it may or may not be in the DOM.
    //    query(
    //      ':enter',
    //      [style({ opacity: 0 })],
    //      { optional: true }
    //    ),
    //    query(
    //      ':leave',
    //      // here we apply a style and use the animate function to apply the style over 0.3 seconds
    //      [style({ opacity: 1, 'padding-left': '0px' }), animate('0.5s', style({ opacity: 0, 'padding-left': '1000px' }))],
    //      { optional: true }
    //    ),
    //    query(
    //      ':enter',
    //      [style({ opacity: 0, 'background-color': '#fafafa', 'padding-left': '1000px' }), animate('0.5s', style({ opacity: 1, 'background-color': '#fafafa', 'padding-left': '0px' }))],
    //      { optional: true }
    //    )
    //  ])
    //])
  ]
  //animations: [
  //  trigger('animRoutes', [
  //    transition('* <=> *', [
  //      group([
  //        query(
  //          ':enter',
  //          [
  //            style({
  //              opacity: 0,
  //              transform: 'translateY(9rem) rotate(-10deg)'
  //            }),
  //            animate(
  //              '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
  //              style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
  //            ),
  //            animateChild()
  //          ],
  //          { optional: true }
  //        ),
  //        query(
  //          ':leave',
  //          [animate('0.35s', style({ opacity: 0 })), animateChild()],
  //          { optional: true }
  //        )
  //      ])
  //    ])
  //  ])
  //]
})
export class FullLayoutComponent { //implements OnInit {


  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }

  value = '';
  searchExpanded = false;
  mobileQuery: MediaQueryList;
  panelOpenState: boolean = false;

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item avinash ${i + 1}`);

  fillerContent = Array(50).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, renderFactory: RendererFactory2, private accountService: AccountServicce
    , @Inject('BASE_URL') private baseUrl: string, private router: Router, private cookie: CookieService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.searchExpanded = false;
  }

  SignOutUser(event: any): void {
    //debugger;
    this.accountService.Logout()
      .subscribe(
      result => {
        if (result) {
          //CookieAppAuthencticated
          //this.cookie.delete('CookieAppAuthencticated');
          this.router.navigate(['']);
        }
        else {
          alert('failed');
        }
      },
      error => {
        console.log(error);
        location.href = this.baseUrl;
      }
      );

  }

  changeOfRoutes(): void {
    //alert('rote changes');
    let authCookie = this.cookie.get('CookieAppAuthencticated');
    if (authCookie == null || authCookie.length == 0) {
      this.router.navigate(['']);
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  toggleSearchWidth(event: any): void {
    //debugger
    if (this.value == '')
      this.searchExpanded = false;
  }

  //slimscroll events and methods start

  //opts: ISlimScrollOptions;
  //opts2: ISlimScrollOptions;
  //scrollEvents: EventEmitter<SlimScrollEvent>;

  //ngOnInit() {
  //  this.scrollEvents = new EventEmitter<SlimScrollEvent>();
  //  // this.opts = {
  //  //   position?: string,// left | right
  //  //   barBackground?: string, // #C9C9C9
  //  //   barOpacity?: string; // 0.8
  //  //   barWidth?: string; // 10
  //  //   barBorderRadius?: string; // 20
  //  //   barMargin?: string; // 0
  //  //   gridBackground?: string; // #D9D9D9
  //  //   gridOpacity?: string; // 1
  //  //   gridWidth?: string; // 2
  //  //   gridBorderRadius?: string; // 20
  //  //   gridMargin?: string; // 0
  //  //   alwaysVisible?: boolean; // true
  //  //   visibleTimeout?: number; // 1000
  //  //   scrollSensitivity?: number; // 1
  //  // }
  //  this.opts = {
  //    barBackground: '#2C3E50',
  //    gridBackground: '#f8f8f8',
  //    barBorderRadius: '10',
  //    barWidth: '6',
  //    gridWidth: '2',
  //    alwaysVisible: true,
  //    barOpacity: '0.5',
  //    gridOpacity: '0'
  //  };

  //  this.opts2 = {
  //    barBackground: '#2C3E50',
  //    gridBackground: '#2C3E50',
  //    barBorderRadius: '3',
  //    barWidth: '5',
  //    gridWidth: '1',
  //    alwaysVisible: true,
  //    barOpacity: '0.5',
  //    gridOpacity: '0'
  //  };

  //  this.play();
  //}

  //play(): void {
  //  let event = null;

  //  Promise.resolve()
  //    .then(() => this.timeout(3000))
  //    .then(() => {
  //      event = new SlimScrollEvent({
  //        type: 'scrollToBottom',
  //        duration: 2000,
  //        easing: 'inOutQuad'
  //      });

  //      this.scrollEvents.emit(event);
  //    })
  //    .then(() => this.timeout(3000))
  //    .then(() => {
  //      event = new SlimScrollEvent({
  //        type: 'scrollToTop',
  //        duration: 3000,
  //        easing: 'outCubic'
  //      });

  //      this.scrollEvents.emit(event);
  //    })
  //    .then(() => this.timeout(4000))
  //    .then(() => {
  //      event = new SlimScrollEvent({
  //        type: 'scrollToPercent',
  //        percent: 80,
  //        duration: 1000,
  //        easing: 'linear'
  //      });

  //      this.scrollEvents.emit(event);
  //    })
  //    .then(() => this.timeout(2000))
  //    .then(() => {
  //      event = new SlimScrollEvent({
  //        type: 'scrollTo',
  //        y: 200,
  //        duration: 4000,
  //        easing: 'inOutQuint'
  //      });

  //      this.scrollEvents.emit(event);
  //    });
  //}

  //timeout(ms: number): Promise<void> {
  //  return new Promise(resolve => setTimeout(() => resolve(), ms));
  //}
  //slime scroll event methods end
}
