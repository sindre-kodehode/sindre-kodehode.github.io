"use strict"


/*******************************************************************************
*  array of task objects                                                       *
*******************************************************************************/
const todos = [
  { 
    desc  : "Yoga",
    due   : new Date( "May,27,2022,11:30" ),
    added : new Date( "May,26,2022" ), 
    done  : true,
  }, { 
    desc  : "Water plants",
    due   : new Date( "May,28,2022,17:30" ),
    added : new Date( "May,26,2022" ),
    done  : true,
  }, { 
    desc  : "Package delivery",
    due   : new Date( "May,28,2022,15:00" ),
    added : new Date( "May,27,2022" ), 
    done  : false,
  }, { 
    desc  : "Send report",
    due   : new Date( "May,30,2022,17:00" ),
    added : new Date( "May,25,2022" ), 
    done  : false,
  },
];


const header = document.createElement( "h1" );
header.textContent = "Todo List";
document.body.append( header );

/*******************************************************************************
*  sort the task array by different criteria                                   *
*******************************************************************************/
const sorts = [
  { name : "done" , sort : ( a    ) => a.done ? -1 : 1               , },
  { name : "desc" , sort : ( a, b ) => a.desc.localeCompare( b.desc ), },
  { name : "due"  , sort : ( a, b ) => a.due - b.due                 , },
  { name : "added", sort : ( a, b ) => a.added - b.added             , },
];

const sortContainer = document.createElement( "div" );
sortContainer.classList.add( "sort-container" );
document.body.append( sortContainer );

const removeSortIcon = () => {
  [ ...document.querySelectorAll( ".sorted" ),
    ...document.querySelectorAll( ".sorted-reverse" )
  ].forEach( e => {
    e.classList.remove( "sorted-reverse" );
    e.classList.remove( "sorted" );
  });
};

sorts.forEach( ({ name, sort }) => {
  const button = document.createElement( "button" );
  button.textContent = name;
  sortContainer.append( button );

  button.addEventListener( "click", () => {
    removeSortIcon();

    if ( sorted === name ) {
      button.classList.add( "sorted-reverse" );
      todos.reverse();
      renderList( name );
    }

    else {
      button.classList.add( "sorted" );
      todos.sort( sort );
      renderList( name );
    }
  });
});


/*******************************************************************************
*  clear the old view of the list and create a new one representing the        * 
*  current task array                                                          * 
*******************************************************************************/
let sorted = "";
const listEl = document.createElement( "div" );
document.body.append( listEl );

const renderList = sortOrder => {
  sorted = sortOrder;
  if ( sorted === "none" ) removeSortIcon();

  listEl.textContent = "";
  todos.forEach( todo => {
    const listItemEl = document.createElement( "div" );
    listItemEl.classList.add( "todo-item" );
    listEl.append( listItemEl );

    if ( todo.done ) listItemEl.classList.add( "done" );

    const checkBoxEl = document.createElement( "div" );
    listItemEl.append( checkBoxEl );

    if ( todo.done ) checkBoxEl.classList.add( "check" );
    else checkBoxEl.classList.add( "uncheck" );

    checkBoxEl.addEventListener( "click", () => {
      todo.done = !todo.done;
      renderList( "none" );
    });

    const contentEl = document.createElement( "div" );
    contentEl.classList.add( "content-container" );
    listItemEl.append( contentEl  );

    const descEl = document.createElement( "input" );
    descEl.value = todo.desc;
    contentEl.append( descEl );

    descEl.addEventListener( "change", () => {
      todo.desc = descEl.value;
      removeSortIcon();
    });

    const timeEl = document.createElement( "span" );
    timeEl.classList.add( "date" );
    timeEl.textContent = todo.due.toDateString();
    contentEl.append( timeEl );

    const removeEl = document.createElement( "span" );
    removeEl.classList.add( "remove" );
    listItemEl.append( removeEl );

    removeEl.addEventListener( "click", () => {
      todos.splice( todos.indexOf( todo ), 1 );
      renderList( "none" );
    });
  });
};

renderList( "none" );


/*******************************************************************************
*  add a new task object to the array                                          *
*******************************************************************************/
const inputContainer = document.createElement( "div" );
inputContainer.classList.add( "input-container" );
document.body.append( inputContainer );

const plussIcon = document.createElement( "div" );
plussIcon.classList.add( "pluss" );
inputContainer.append( plussIcon );

plussIcon.addEventListener( "click", () => {
  input.focus();
});

const input = document.createElement( "input" );
input.type = "text";
input.placeholder = "Add todo"
inputContainer.append( input );

input.addEventListener( "keydown", ({ key, target }) => {
  if ( key === "Enter" ) {

    if ( target.value.match( /^ *$/ ) ) return;

    const day = 1000 * 60 * 60 * 24;

    todos.push({
      desc  : target.value,
      due   : new Date( Date.now() + day ),
      added : new Date(),
      done  : false,
    });

    target.value = "";
    target.focus();

    renderList( "none" );
  }
});

