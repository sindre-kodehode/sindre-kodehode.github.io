"use strict"

const url = "https://nrkno-ssenotifier.nrk.no/sse/newsfeed";
const eventSource = new EventSource( url );

const articlesElement = document.querySelector( ".articles" );
const viewElement     = document.querySelector( ".view" );

let articles;
let data;
let selectedArticle = 0;

eventSource.onmessage = event => {
  data = JSON.parse( event.data );

  for ( let message of data.messages ) {
    const infoElement = document.createElement( "p" );

    infoElement.textContent  = `${message.time} ${message.title}`
    articlesElement.appendChild( infoElement );
  }
  
  articles = document.querySelectorAll( "p" );
  articles[selectedArticle].classList.toggle( "selected" );
  viewArticle();
};

document.addEventListener( "keydown", event => {
  switch ( event.code ) {
    case "KeyJ" : nextArticle(); break;
    case "KeyK" : prevArticle(); break;
  }
});

const nextArticle = () => {
  articles[selectedArticle].classList.toggle( "selected" );
  selectedArticle++;

  if ( selectedArticle > articles.length - 1 ) {
    selectedArticle = articles.length - 1;
  }

  articles[selectedArticle].classList.toggle( "selected" );
  articles[selectedArticle].scrollIntoView( true );

  viewArticle();
};

const prevArticle = () => {
  articles[selectedArticle].classList.toggle( "selected" );
  selectedArticle--;

  if ( selectedArticle < 0 ) {
    selectedArticle = 0;
  }

  articles[selectedArticle].classList.toggle( "selected" );
  articles[selectedArticle].scrollIntoView( true );

  viewArticle();
};

const viewArticle = () => {
  const message = data.messages[selectedArticle];
  const title = document.createElement( "h2" );
  const info  = document.createElement( "p" );
  const lead  = document.createElement( "p" );

  title.textContent = `${message.title}`;
  info.textContent  = `${message.time}`;

  if ( message.compilations ) {
    info.textContent += ` ${message.compilations[0].title}`;
  }

  lead.innerHTML    = `${message.lead}`;

  viewElement.innerHTML = "";
  viewElement.appendChild( title );
  viewElement.appendChild( info );

  if ( message.attachment ) {
    const image = document.createElement( "img" );
    image.src = message.attachment.image;
    viewElement.appendChild( image );
  }

  viewElement.appendChild( lead );
};
