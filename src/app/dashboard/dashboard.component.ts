import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NumOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;



  CurrentExpenditure: number;
  AvailableFunds: number;

  constructor() { }

  // tslint:disable-next-line: no-unused-expression
  ngOnInit(): void {
    this.Designation = 'Avatar Details';
    this.Username = 'John Smith';
    this.NumOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 2113507;



    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }

}
