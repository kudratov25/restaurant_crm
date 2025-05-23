export interface menu {
  header?: string;
  title?: string;
  icon?: string;
  to?: string;
  divider?: boolean;
  getURL?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Dashboard',
    icon: 'custom-home-trend',
    to: '/dashboard/default'
  },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: 'custom-typography',
    to: '/utils/typography'
  },
  {
    title: 'Colors',
    icon: 'custom-colorpick',
    to: '/utils/colors'
  },
  {
    title: 'Shadows',
    icon: 'custom-shadow',
    to: '/utils/shadows'
  },
  { header: 'Pages' },
  {
    title: 'Login',
    icon: 'custom-shield',
    to: '/auth/login'
  },
  {
    title: 'Register',
    icon: 'custom-register',
    to: '/auth/register'
  },
  { header: 'Others' },
  {
    title: 'Telegram Support',
    icon: 'custom-support',
    to: 'https://t.me/tez_chop',
    type: 'external'
  }
];

export default sidebarItem;
