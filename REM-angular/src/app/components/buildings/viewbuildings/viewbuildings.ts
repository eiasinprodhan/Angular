import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../../../model/building.model';
import { BuildingsService } from '../../../services/buildings/buildings.service';

@Component({
  selector: 'app-viewbuildings',
  standalone: false,
  templateUrl: './viewbuildings.html',
  styleUrl: './viewbuildings.css'
})
export class Viewbuildings implements OnInit {
  buildings!: any;

  constructor(
    private buildingsservice: BuildingsService,
  ){}

  ngOnInit(): void {
    this.viewBuildings();
  }

  viewBuildings():void{
    this.buildings = this.buildingsservice.viewBuildings();
  }

}
