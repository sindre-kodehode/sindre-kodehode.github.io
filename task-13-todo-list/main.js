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

const addElement = ( type, parent, opts={} ) => {
  const element = document.createElement( type );
  parent.append( element );

  for ( const [ key, value ] of Object.entries( opts ) )
    element[ `${key}` ] = value;

  return element;
};

addElement( "h1", document.body, {
  textContent : "Todo List",
});

/*******************************************************************************
*  sort the task array by different criteria                                   *
*******************************************************************************/
const sorts = [
  { name : "done" , sort : ( a    ) => a.done ? -1 : 1               , },
  { name : "desc" , sort : ( a, b ) => a.desc.localeCompare( b.desc ), },
  { name : "due"  , sort : ( a, b ) => a.due - b.due                 , },
  { name : "added", sort : ( a, b ) => a.added - b.added             , },
];

const removeSortIcon = () => {
  [ ...document.querySelectorAll( ".sorted" ),
    ...document.querySelectorAll( ".sorted-reverse" )
  ].forEach( e => {
    e.classList.remove( "sorted-reverse" );
    e.classList.remove( "sorted" );
  });
};

const sortContainer = addElement( "div", document.body, {
  className : "sort-container"
});

sorts.forEach( ({ name, sort }) => {
  const button = addElement( "button", sortContainer, {
    textContent : name,
  });
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
const listEl = addElement( "div", document.body );

const renderList = sortOrder => {
  sorted = sortOrder;
  if ( sorted === "none" ) removeSortIcon();

  listEl.textContent = "";
  todos.forEach( todo => {
    const listItemEl = addElement( "div", listEl, {
      className : "todo-item",
    });

    if ( todo.done ) listItemEl.classList.add( "done" );

    const checkBoxEl = addElement( "div", listItemEl, {
      className : "uncheck",
    });

    if ( todo.done ) checkBoxEl.className = "check";

    checkBoxEl.addEventListener( "click", () => {
      todo.done = !todo.done;
      renderList( "none" );
    });

    const contentEl = addElement( "div", listItemEl, {
      className : "content-container",
    });

    const descEl = addElement( "input", contentEl, {
      value : todo.desc,
    });

    descEl.addEventListener( "change", () => {
      todo.desc = descEl.value;
      removeSortIcon();
    });

    const timeEl = addElement( "span", contentEl, {
      className   : "date",
      textContent : todo.due.toDateString(),
    });

    timeEl.addEventListener( "click", () => {
      timeEl.remove();

      const timePickerEl = addElement( "input", contentEl, {
        type : "datetime-local",
      });
    });

    const removeEl = addElement( "span", listItemEl, {
      className : "remove",
    });

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
const inputContainer = addElement( "div", document.body, {
  className : "input-container",
});

const plussIcon = addElement( "span", inputContainer, {
  className : "pluss",
});

plussIcon.addEventListener( "click", () => {
  input.focus();
});

const input = addElement( "input", inputContainer, {
  type        : "text",
  placeholder : "Add todo",
});

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
