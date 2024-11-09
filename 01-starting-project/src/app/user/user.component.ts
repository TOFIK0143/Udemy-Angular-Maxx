import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input() user?: {id: string; name:string; avatar:string};


  get imagePath() { 
    return this.user ? `assets/users/${this.user.avatar}` :''; 
  }
  
}
