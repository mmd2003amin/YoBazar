import man from "../assets/CategoriesMenuSub/1.jpg";
import woman from "../assets/CategoriesMenuSub/2.jpg";
import bag from "../assets/CategoriesMenuSub/3.jpg";
import shoe from "../assets/CategoriesMenuSub/4.jpg";
import Glasses from "../assets/CategoriesMenuSub/5.jpg";

const PagesSubMenu = [
  {
    id: 1,
    name: "خانه",
    path: "glasses",
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
    path: "shoe",
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
    path: "bag",
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
    path: "man",
    items: ["محصول 1", "محصول 2", "محصول 3", "محصول 4", "گروه محصولات"],
  },
  {
    id: 5,
    name: "سایر",
    path: "woman",
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
    path: "man",
    items: ["پیراهن", "پیراهن پولو", "تی‌شرت", "راحتی", "شلوار مردانه"],
  },
  {
    id: 2,
    name: "مردانه",
    path: "man",
    items: ["شورت", "کت و ژاکت", "کت و شلوار", "لباس راحتی", "لباس ورزشی"],
  },
  {
    id: 3,
    path: "woman",
    name: "زنانه",
    items: ["تاپ", "جین", "دامن", "شلوار", "شورت"],
  },
  {
    id: 4,
    name: "زنانه",
    path: "woman",
    items: ["مایو زنانه", "لباس زیر زنانه", "کت و شلوار", "لباس راحتی", "لباس"],
  },
  {
    id: 5,
    name: "سایر",
    path: "watch",
    items: ["ساعت مچی", "جواهرات", "سایر تجهیزات", "جین", "دامن"],
  },
];

const CategoriesSubMenu = [
  { id: 1, path: "woman", name: "زنانه", image: man },
  { id: 2, path: "man", name: "مردانه", image: woman },
  { id: 3, path: "shoe", name: "کفش", image: bag },
  { id: 4, path: "bag", name: "کیف", image: shoe },
  { id: 5, path: "glasses", name: "عینک", image: Glasses },
];

const ManSubMenu = [
  {
    id: 1,
    path: "man",
    items: ["پیراهن پولو", "تی‌شرت", "راحتی", "شلوار مردانه"],
  },
  {
    id: 2,
    path: "man",
    items: ["کت و ژاکت", "کت و شلوار", "لباس راحتی", "لباس ورزشی"],
  },
  { id: 3, path: "man", items: ["پیراهن", "شورت", "تجهیزات جانبی", "جین"] },
];

const WomanSubMenu = [
  {
    id: 1,
    path: "woman",
    items: ["لباس زیر زنانه", "کت و شلوار", "لباس راحتی", "لباس"],
  },
  { id: 2, path: "woman", items: ["جین", "دامن", "شلوار", "شورت"] },
  {
    id: 3,
    path: "woman",
    items: ["تاپ", "مایو زنانه", "تجهیزات جانبی", "ساعت مچی"],
  },
];

export {
  PagesSubMenu,
  StoreSubMenu,
  CategoriesSubMenu,
  ManSubMenu,
  WomanSubMenu,
};
