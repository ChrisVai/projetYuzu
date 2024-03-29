import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {

  title: string = "News of the Internet";

}
