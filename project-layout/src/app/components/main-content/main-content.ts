import { Component } from '@angular/core';
import { UserProfile } from '../user-profile/user-profile';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [UserProfile],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {

}
