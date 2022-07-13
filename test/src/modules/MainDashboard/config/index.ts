import {Icons} from '@src/assets';
import {HomeScreen} from '@src/modules/Home';
import {ProfileScreen} from '@src/modules/Profile';
import {SearchScreen} from '@src/modules/Search';
import {BottomTabsProps} from '../model';

const screens = {
  home: 'Home',
  search: 'Search',
  profile: 'Profile',
};

const bottom_tabs: BottomTabsProps[] = [
  {
    id: 0,
    label: screens.home,
    icon: Icons.all,
    element: HomeScreen,
  },
  {
    id: 1,
    label: screens.search,
    icon: Icons.all,
    element: SearchScreen,
  },
  {
    id: 2,
    label: screens.profile,
    icon: Icons.all,
    element: ProfileScreen,
  },
];

export const config = {
  screens,
  bottom_tabs,
};
