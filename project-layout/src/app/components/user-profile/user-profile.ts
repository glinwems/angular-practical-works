import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending'
}

interface Address {
  city: string;
  street: string;
}

interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: Address;
  hobbies: string[];
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  user: User = {
    id: 1,
    name: 'Сергій Сергіенко',
    status: UserStatus.Active,
    address: {
      city: 'Київ',
      street: 'Павла Зіброва, 1'
    },
    hobbies: ['Настільний теніс', 'Програмування', 'Ігри', 'Спорт']
  };

  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}
