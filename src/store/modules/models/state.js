/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */
/* eslint-disable */

export default {
  modelName: 'ssoosm',
  defaultPath: 'http://s3-eu-west-2.amazonaws.com/insitu-aws-s3-bucket-user-content/pRzvPthvp4u2sY5pe/',
  mtlPath: 'Valencia_Deep_Seating.mtl',
  objPath: 'Valencia_Deep_Seating.obj',
  matJsonFile: '/static/resources/materials/mat-lib-auto.json',
  count: 0,
  styles: {
    adminPortal: {
      backgroundColor: 'grey'
    }
  },
  brands:["Honda", "Skoda", "Kawasaki", "Seat"],
  loading: false,
  brand: "Audi",
  redirectURL: 'home.index',
  elinks: null,
  header: {
    title: {},
    style: {
      banner_style: 'background-color: #000000;',
      menu_style: '',
    },
    welcome: {},
    news: [],
    menus: [
      { id: 1, name: 'Vouchers', link: '', children: [], routerName: 'home.vehicle.redeemvoucher' },
      { id: 2, name: 'Earn Rewards', link: '', children: [], routerName: 'home.vehicle.earnrewards' },
      { id: 3, name: 'Owners Offers', link: '', children: [], routerName: 'home.vehicle.ownersoffers' },
      { id: 4, name: 'Cosmetic Repairs', link: '', children: [], routerName: 'home.vehicle.cosmeticrepairs' },
      { id: 5, name: 'Accident Assistance', link: '', children: [], routerName: 'home.vehicle.accedentcare' },
      { id: 6, name: 'Community', link: '', children: [], routerName: 'home.vehicle.littlevips' },
    ],
  },
  home: {
    slider: [],
    section1: {
      row1: [],
      row2: [],
    },
    section2: {
      row1: [],
      row2: [],
    },
    section3: {
      row1: [],
    },
  },
  cosmeticrepairs: [],
  offers: [],
  vips: [],
  news: [],
  locations: [],
  vouchers: [],
  hobs: [],
  mapInfo: {},
  earnRewardsEmail: {
    to: '',
    subject: 'Great scheme if you buy a car',
    body: 'Hi,\n\n\n\
    As a Sytner Audi Club member, both you and I can earn rewards if you purchase a new or used vehicle from any Sytner VWG Centre.\n\
    You’ll enjoy £200 worth of accessories or optional extras and I’ll get some money off too.\n\n\n\
    Simply fill in this form to request a test drive:\n\
    #ClubID#\n\n\
    Good luck with finding your perfect car.\n\n\
    [[2Firstnam]]\n\n\n\n',
  },
  footer: null,
  // defaultPath: 'http://s3-eu-west-2.amazonaws.com/cedar-nursery/bsgEtY5bCXHXq3teK/',
  // mtlPath: 'cedars-4-sips-horsley-garden-building-3800-x-3600.mtl',
  // objPath: 'cedars-4-sips-horsley-garden-building-3800-x-3600.obj',
};
