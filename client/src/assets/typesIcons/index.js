import { ReactComponent as Electricity } from './electricity.svg';
import { ReactComponent as Wifi } from './wifi.svg';
import { ReactComponent as Water } from './water.svg';
import { ReactComponent as Mobile } from './smartphone-iphone.svg';

const TypesColors = {
  water: {
    color: 'bg-kournikova',
    hoverColor: 'hover:bg-kournikova-lighter',
    component: Water,
  },
  electricity: {
    hoverColor: 'hover:bg-blueBell-lighter',
    color: 'bg-blueBell',
    component: Electricity,
  },
  internet: {
    hoverColor: 'hover:bg-magenta-lighter',
    color: 'bg-magenta',
    component: Wifi,
  },
  mobile: {
    hoverColor: 'hover:bg-blue-lighter',
    color: 'bg-blue',
    component: Mobile,
  },
};

export default TypesColors;
