import { ReactComponent as Electricity } from './electricity.svg';
import { ReactComponent as Wifi } from './wifi.svg';
import { ReactComponent as Water } from './water.svg';
import { ReactComponent as Mobile } from './smartphone-iphone.svg';

const TypesColors = {
  water: {
    color: 'bg-kournikova',
    hoverColor: 'hover:bg-kournikova-dark',
    component: Water,
  },
  electricity: {
    hoverColor: 'hover:bg-blueBell-dark',
    color: 'bg-blueBell',
    component: Electricity,
  },
  internet: {
    hoverColor: 'hover:bg-magenta-dark',
    color: 'bg-magenta',
    component: Wifi,
  },
  mobile: {
    hoverColor: 'hover:bg-blue-dark',
    color: 'bg-blue',
    component: Mobile,
  },
};

export default TypesColors;
