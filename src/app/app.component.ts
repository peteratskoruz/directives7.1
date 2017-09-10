import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  submitted: boolean = false;
  ngOnInit() {
  }


  submit(Name: string, LastName: string) {
    this.submitted = true;
    this.title = `${Name} ${LastName}`;
  }
}
