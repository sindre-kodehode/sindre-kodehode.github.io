type categoriesType = {
  id     : number,
  filter : string,
  link   : string,
  text   : string,
}

export const CATEGORIES: categoriesType[] = [
  { id: 1, filter: ""                , link: ""           , text: "Webshop"    , },
  { id: 2, filter: "men's clothing"  , link: "men"        , text: "Men"        , },
  { id: 3, filter: "women's clothing", link: "women"      , text: "Women"      , },
  { id: 4, filter: "electronics"     , link: "electronics", text: "Electronics", },
  { id: 5, filter: "jewelery"        , link: "jewelery"   , text: "Jewelery"   , },
]
