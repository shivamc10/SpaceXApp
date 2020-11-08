import { Component } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { Routes, RouterModule, Router } from '@angular/router';

const LAUNCH_QUERY = gql`
query launchpads($offset: Int)  {
  launchpads (offset: $offset, limit: 10){
    id
    name
    location {
      name
      region
    }
    status
    successful_launches
    attempted_launches
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public launchpads: any;
  
  private query: QueryRef<any>;

  constructor(private apollo: Apollo, private router:Router) {
  
  }

  ngOnInit(): void {
    console.log('app in component');
    this.getlaunchpads();
    
  }
  public getlaunchpads = () => {
    console.log('app in service');

    this.query = this.apollo.watchQuery({
      query: LAUNCH_QUERY,
      // variables: { offset: 10 * this.page }
    });
    this.query.valueChanges.subscribe(result => {
      this.launchpads = result.data.launchpads;
      console.log(this.launchpads);
    });
    
  }
  
  public changeUrl(id){
    console.log(id);
    this.router.navigate(['','vehicle',id])
  }
}
