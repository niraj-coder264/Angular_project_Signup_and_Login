import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(){}
  ngOnInit(): void {
 
  }
  
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');

}
