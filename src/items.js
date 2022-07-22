import image01 from './assets/images01.webp';
import image02 from './assets/images02.webp';
import image03 from './assets/images03.webp';
import image04 from './assets/images04.webp';
import image05 from './assets/images05.webp';
import image06 from './assets/images06.webp';
import image07 from './assets/images07.webp';
import image08 from './assets/images08.webp';
import image09 from './assets/images09.webp';
import image10 from './assets/images10.webp';
import image11 from './assets/images11.webp';
import image14 from './assets/images14.webp';
import image15 from './assets/images15.webp';
import image16 from './assets/images16.webp';
import image17 from './assets/images17.webp';
import image18 from './assets/images18.webp';
import image19 from './assets/images19.webp';

const items = [
  { name: 'NSFW Snapback Hat', price: 38, image: image01 },
  {
    name: 'NSFW Not Sure For What Hoodie - Black',
    price: 62,
    image: image02,
  },
  {
    name: 'NSFW Hooded Fleece - Stacked Grey',
    price: 66,
    image: image03,
  },
  {
    name: `NSFW I'm Fine Hoodie - Black`,
    price: 62,
    image: image04,
  },
  {
    name: `NSFW I'm Fine Hoodie - White`,
    price: 62,
    image: image05,
  },
  {
    name: 'NSFW Camouflage Tee - Blocked Black',
    price: 32,
    image: image06,
  },
  {
    name: 'NSFW Camouflage Tee - Blocked White',
    price: 32,
    image: image07,
  },
  {
    name: 'NSFW Camouflage Tee - Blocked Purple',
    price: 32,
    image: image08,
  },
  {
    name: 'NSFW Camouflage Tee - Strikethrough Black',
    price: 32,
    image: image09,
  },
  {
    name: 'NSFW Camouflage Tee - Strikethrough White',
    price: 32,
    image: image10,
  },
  { name: 'NSFW Tote Bag - Stacked', price: 29, image: image11 },
  {
    name: 'NSFW Tee - Strikethrough Pink',
    price: 36,
    image: image14,
  },
  { name: 'NSFW Tee - Linear Grey', price: 36, image: image15 },
  { name: 'NSFW Tee - Linear Pink', price: 36, image: image16 },
  { name: 'NSFW Tee - Linear Olive', price: 36, image: image17 },
  {
    name: 'NSFW Long Sleeve Tee - Blocked Grey',
    price: 39,
    image: image18,
  },
  {
    name: 'NSFW Long Sleeve Tee - Blocked Olive',
    price: 39,
    image: image19,
  },
];

const itemList = new Map();
items.forEach((item, index) => {
  itemList.set(index, item);
});


export default itemList;
