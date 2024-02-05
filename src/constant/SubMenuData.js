import man from "../assets/CategoriesMenuSub/1.jpg";
import woman from "../assets/CategoriesMenuSub/2.jpg";
import bag from "../assets/CategoriesMenuSub/3.jpg";
import shoe from "../assets/CategoriesMenuSub/4.jpg";
import Glasses from "../assets/CategoriesMenuSub/5.jpg";

const PagesSubMenu = [
  {
    id: 1,
    name: "خانه",
    items: [
      "صفحه اصلی 1",
      "صفحه اصلی 2",
      "صفحه اصلی 3",
      "صفحه اصلی 4",
      "صفحه اصلی 5",
    ],
  },
  {
    id: 2,
    name: "وبلاگ",
    items: [
      "وبلاگ | پیش‌فرض",
      "وبلاگ شبکه‌ای",
      "وبلاگ | مطلب",
      "تایپوگرافی",
      "به‌زودی",
    ],
  },
  {
    id: 3,
    name: "فروشگاه",
    items: [
      "دسته تبلیغاتی",
      "فروشگاه | شبکه‌ای",
      "فروشگاه | لیست",
      "فروشگاه | ساید‌بار",
      "فروشگاه | لود کننده",
    ],
  },
  {
    id: 4,
    name: "محصولات",
    items: ["محصول 1", "محصول 2", "محصول 3", "محصول 4", "گروه محصولات"],
  },
  {
    id: 5,
    name: "سایر",
    items: [
      "صفحه 404",
      "درباره",
      "پورتفولیو",
      "جزِییات پورتفولیو",
      "لیست علاقه مندیها",
    ],
  },
];

const StoreSubMenu = [
  {
    id: 1,
    name: "مردانه",
    items: ["پیراهن", "پیراهن پولو", "تی‌شرت", "راحتی", "شلوار مردانه"],
  },
  {
    id: 2,
    name: "مردانه",
    items: ["شورت", "کت و ژاکت", "کت و شلوار", "لباس راحتی", "لباس ورزشی"],
  },
  { id: 3, name: "زنانه", items: ["تاپ", "جین", "دامن", "شلوار", "شورت"] },
  {
    id: 4,
    name: "زنانه",
    items: ["مایو زنانه", "لباس زیر زنانه", "کت و شلوار", "لباس راحتی", "لباس"],
  },
  {
    id: 5,
    name: "سایر",
    items: ["ساعت مچی", "جواهرات", "سایر تجهیزات", "جین", "دامن"],
  },
];

const CategoriesSubMenu = [
  { id: 1, name: "زنانه", image: man },
  { id: 2, name: "مردانه", image: woman },
  { id: 3, name: "کفش", image: bag },
  { id: 4, name: "کیف", image: shoe },
  { id: 5, name: "عینک", image: Glasses },
];

const ManSubMenu = [
  { id: 1, items: ["پیراهن پولو", "تی‌شرت", "راحتی", "شلوار مردانه"] },
  { id: 2, items: ["کت و ژاکت", "کت و شلوار", "لباس راحتی", "لباس ورزشی"] },
  { id: 3, items: ["پیراهن", "شورت", "تجهیزات جانبی", "جین"] },
];

const WomanSubMenu = [
  { id: 1, items: ["لباس زیر زنانه", "کت و شلوار", "لباس راحتی", "لباس"] },
  { id: 2, items: ["جین", "دامن", "شلوار", "شورت"] },
  { id: 3, items: ["تاپ", "مایو زنانه", "تجهیزات جانبی", "ساعت مچی"] },
];

export {
  PagesSubMenu,
  StoreSubMenu,
  CategoriesSubMenu,
  ManSubMenu,
  WomanSubMenu,
};