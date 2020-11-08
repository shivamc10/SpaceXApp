import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo, QueryRef } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

const VEHICLE_QUERY = gql `query launchpad($id: ID!){
	launchpad (id: $id) {
	    vehicles_launched {
	      active
	      boosters
	      company
	      cost_per_launch
	      country
	      success_rate_pct
	      stages 
        name
        id
        first_flight
        type
	    }
	}
}`

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  public vehicleDetails: any;
  private query: QueryRef<any>;
  private Id: string;
  constructor(private apollo: Apollo, private route:ActivatedRoute) {
    this.route.paramMap.subscribe( params => {
      if (params.get('id') != null || params.get('id') != undefined ) {
      this.Id = params.get('id');
      this.getvehicleDetails(this.Id);
      }
      });
   }

  ngOnInit(): void {
    console.log('app in component');
    
  }

  public getvehicleDetails = (id) => {
    console.log(id);

    this.query = this.apollo.watchQuery({
      query: VEHICLE_QUERY,
      variables: { id: id }
    });
    this.query.valueChanges.subscribe(result => {
      this.vehicleDetails = result.data.launchpad.vehicles_launched;
      console.log(this.vehicleDetails);
    });
    
  }
}
