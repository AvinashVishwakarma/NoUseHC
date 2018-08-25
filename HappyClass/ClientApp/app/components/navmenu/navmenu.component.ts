import { Component } from '@angular/core';
import { fadeAnimation, listItemAnimation, animateList } from '../../appAnimation/fadeAnimation';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component3.css'],
  animations: [fadeAnimation, animateList, listItemAnimation]
})
export class NavMenuComponent {
  panelOpenState: any = false;
}
