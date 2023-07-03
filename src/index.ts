import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapId: any = document.querySelector('#map');
// if(mapId !== null) mapId = document.querySelector('#map');

const user = new User();
const company = new Company();
const customMap = new CustomMap(mapId);

customMap.addMarker(user);
customMap.addMarker(company);
