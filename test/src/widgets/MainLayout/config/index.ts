import {Icons} from '@src/assets';

const screens = {
  home: 'Home',
  search: 'Search',
  profile: 'Profile',
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
    icon: Icons.all,
  },
  {
    id: 1,
    label: screens.search,
    icon: Icons.all,
  },
  {
    id: 2,
    label: screens.profile,
    icon: Icons.all,
  },
];

export const config = {
  screens,
  bottom_tabs,
};
