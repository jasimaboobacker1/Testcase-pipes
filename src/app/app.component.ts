import { CommonModule, CurrencyPipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ExamplePipe } from './example.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,UpperCasePipe,PercentPipe,SlicePipe,CurrencyPipe,ExamplePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-testcases';
  students = [
    { id: 1, name: 'Alice', dob: '1995-03-15', gender: 'Female', mark: 80, address: '123 Main St, City', feePaid: 10000 },
    { id: 2, name: 'Bob', dob: '1996-07-20', gender: 'Male', mark: 75, address: '456 Elm St, Town', feePaid: 3000 },
    { id: 3, name: 'Charlie', dob: '1997-01-10', gender: 'Male', mark: 90, address: '789 Oak St, Village', feePaid: 20000 },
    { id: 4, name: 'David', dob: '1998-04-25', gender: 'Male', mark: 85, address: '234 Pine St, City', feePaid: 15000 },
    { id: 5, name: 'Eve', dob: '1999-08-30', gender: 'Female', mark: 78, address: '567 Maple St, Town', feePaid: 18000 },
    { id: 6, name: 'Frank', dob: '2000-02-14', gender: 'Male', mark: 92, address: '890 Cedar St, Village', feePaid: 25000 },
    { id: 7, name: 'Grace', dob: '2001-06-18', gender: 'Female', mark: 70, address: '123 Oak St, City', feePaid: 12000 },
    { id: 8, name: 'Henry', dob: '2002-10-23', gender: 'Male', mark: 87, address: '456 Elm St, Town', feePaid: 22000 },
    { id: 9, name: 'Ivy', dob: '2003-03-08', gender: 'Female', mark: 82, address: '789 Pine St, Village', feePaid: 19000 },
    { id: 10, name: 'Jack', dob: '2004-07-12', gender: 'Male', mark: 95, address: '890 Maple St, City', feePaid: 27000 }
  ];
  

}
