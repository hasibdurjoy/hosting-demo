interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Hosting",
    link: "/hosting",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Pages",
    link: "/about",
    has_dropdown: false,
  },

  {
    id: 4,
    title: "News",
    link: "/blog",
    has_dropdown: true,
  },
  {
    id: 5,
    title: "Contact",

    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
