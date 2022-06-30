export type CardType = {
  id          : number,
  title       : string,
  location    : string,
  map         : string,
  description : string,
  startDate   : Date,
  endDate     : Date,
  img         : {
    src       : string,
    alt       : string,
  },
};

export const CARDS: CardType[] = [
  { 
    id          : 1,
    title       : "Mount Fuji",
    location    : "Japan",
    map         : "https://goo.gl/maps/YH4PryyvH3CXifEq6",
    description : `Mount Fuji is the tallest mountain in Japan, standing
                  at 3,776 meters (12,380 feet). Mount Fuji is the single
                  most popular tourist site in Japan, for both Japanese
                  and foreign tourists.`,
    startDate   : new Date( 2021, 1, 12 ),
    endDate     : new Date( 2021, 1, 24 ),
    img         : {
      src       : "https://source.unsplash.com/WLxQvbMyfas",
      alt       : "Picture of Mount Fuji",
    },
  }, { 
    id          : 2,
    title       : "Sydney Opera House",
    location    : "Australia",
    map         : "https://goo.gl/maps/mL8M6p3DzEoUirP19",
    description : `The Sydney Opera House is a multi-venue performing
                  arts centre in Sydney. Located on the banks of the
                  Sydney Harbour, it is often regarded as one of the
                  20th century's most famous and distinctive buildings`,
    startDate   : new Date( 2021, 5, 27 ),
    endDate     : new Date( 2021, 6,  8 ),
    img         : {
      src       : "https://source.unsplash.com/JmuyB_LibRo",
      alt       : "Picture of Sydney Opera House",
    },
  }, { 
    id          : 3,
    title       : "Geirangerfjorden",
    location    : "Norway",
    map         : "https://goo.gl/maps/F3eVY4YDpvXxUwaj9",
    description : `The Geiranger Fjord is a fjord in the Sunnmøre
                  region of Møre og Romsdal county, Norway. It is
                  located entirely in the Stranda Municipality.`,
    startDate   : new Date( 2021, 10,  1 ),
    endDate     : new Date( 2021, 11, 18 ),
    img         : {
      src       : "https://source.unsplash.com/3PeSjpLVtLg",
      alt       : "Picture of Geirangerfjorden",
    },
  },
];
