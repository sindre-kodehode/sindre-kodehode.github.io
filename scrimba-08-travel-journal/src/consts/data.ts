export type CardType = {
  id          : number,
  name        : string,
  location    : string,
  map         : string,
  description : string,
  startDate   : string,
  endDate     : string,
  img         : {
    src       : string,
    alt       : string,
  },
};

export const CARDS: CardType[] = [
  { 
    id          : 1,
    name        : "Mount Fuji",
    location    : "Japan",
    map         : "https://goo.gl/maps/YH4PryyvH3CXifEq6",
    description : `Mount Fuji is the tallest mountain in Japan, standing
                  at 3,776 meters (12,380 feet). Mount Fuji is the single
                  most popular tourist site in Japan, for both Japanese
                  and foreign tourists.`,
    startDate   : "12 Jan, 2021",
    endDate     : "24 Jan, 2021",
    img         : {
      src       : "https://source.unsplash.com/WLxQvbMyfas",
      alt       : "Picture of Mount Fuji",
    },
  }, { 
    id          : 2,
    name        : "Sydney Opera House",
    location    : "Australia",
    map         : "https://goo.gl/maps/mL8M6p3DzEoUirP19",
    description : `The Sydney Opera House is a multi-venue performing
                  arts centre in Sydney. Located on the banks of the
                  Sydney Harbour, it is often regarded as one of the
                  20th century's most famous and distinctive buildings`,
    startDate   : "27 May, 2021",
    endDate     : "8 Jun, 2021",
    img         : {
      src       : "https://source.unsplash.com/JmuyB_LibRo",
      alt       : "Picture of Sydney Opera House",
    },
  }, { 
    id          : 3,
    name        : "Geirangerfjorden",
    location    : "Norway",
    map         : "https://goo.gl/maps/F3eVY4YDpvXxUwaj9",
    description : `The Geiranger Fjord is a fjord in the Sunnmøre
                  region of Møre og Romsdal county, Norway. It is
                  located entirely in the Stranda Municipality.`,
    startDate   : "01 Oct, 2021",
    endDate     : "18 Nov, 2021",
    img         : {
      src       : "https://source.unsplash.com/3PeSjpLVtLg",
      alt       : "Picture of Geirangerfjorden",
    },
  },
];
