import { Building } from './building.model';
import { Stage } from './stage.model';

export class Floor {
  name!: string;
  building!: Building;
  stage!: Stage;
}
