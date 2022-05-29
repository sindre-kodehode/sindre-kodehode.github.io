"use strict"


/*******************************************************************************
*  global vairables                                                            *
*******************************************************************************/
let sorted = "none";
const todos = [];
const sorts = [
  { name : "done" , sort : ( a    ) => a.done ? -1 : 1               , },
  { name : "desc" , sort : ( a, b ) => a.desc.localeCompare( b.desc ), },
  { name : "due"  , sort : ( a, b ) => a.due - b.due                 , },
  { name : "added", sort : ( a, b ) => a.added - b.added             , },
];


/*******************************************************************************
*  helper functions                                                            *
*******************************************************************************/
const addElement = ( type, parent, opts = {} ) => {
  const newEl = document.createElement( type );
  parent.append( newEl );

  Object.entries( opts ).forEach( ([ key, value ]) => {
    newEl[ `${key}` ] = value;
  });

  return newEl;
};

const removeSortIcon = () => {
  [ ...document.querySelectorAll( ".sorted" ),
    ...document.querySelectorAll( ".sorted-reverse" )
  ].forEach( e => {
    e.classList.remove( "sorted-reverse" );
    e.classList.remove( "sorted" );
  });
};


/*******************************************************************************
*  Add elements to the body of the document                                    * 
*******************************************************************************/
addElement( "h1", document.body, {
  textContent : "Todo List",
});

const sortContainer = addElement( "div", document.body, {
  className : "sort-container"
});

sorts.forEach( ({ name, sort }) => {
  const button = addElement( "button", sortContainer, {
    textContent : name,
    onclick     : () => {
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
    },
  });
});

const listEl = addElement( "div", document.body );

const inputContainerEl = addElement( "div", document.body, {
  className : "input-container",
});

addElement( "span", inputContainerEl, {
  className : "pluss",
  onclick   : () => inputEl.focus(),
});

const inputEl = addElement( "input", inputContainerEl, {
  type        : "text",
  placeholder : "Add todo",
  onkeydown   : ({ key, target }) => {
    if ( key === "Enter" ) {

      if ( target.value.match( /^ *$/ ) ) return;

      todos.push({
        desc  : target.value,
        due   : null,
        added : new Date(),
        done  : false,
      });

      target.value = "";
      target.focus();

      renderList( "none" );
    }
  },
});


/*******************************************************************************
*  format the displayed due date                                               * 
*******************************************************************************/
const formatDate = date => {
  if ( !date ) return "Pick a date...";

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate( tomorrow.getDate() + 1 )

  if ( date.toDateString() === today.toDateString() ) {
    return date.toLocaleString( undefined, {
      hour   : "numeric",
      minute : "numeric",
    });
  }

  if ( date.toDateString() === tomorrow.toDateString() ) {
    return "Tomorrow " + date.toLocaleString( undefined, {
      hour   : "numeric",
      minute : "numeric",
    });
  }

  return date.toLocaleString( undefined, {
    weekday : "short",
    month   : "short",
    day     : "numeric",
  });
};


/*******************************************************************************
*  show a date and time field to pick a due date                               * 
*******************************************************************************/
const datePicker = todo => {
  const setDueDate = () => {
    if ( !todo.due ) todo.due = new Date();

    if ( datePickerEl.valueAsDate ) {
      todo.due.setDate( datePickerEl.valueAsDate.getDate() );
    }
    if ( timePickerEl.valueAsDate ) {
      todo.due.setHours( timePickerEl.valueAsDate.getHours() );
      todo.due.setMinutes( timePickerEl.valueAsDate.getMinutes() );
    }

    datePickerModal.remove();
    renderList( "none" );
  };

  const datePickerModal = addElement( "div", document.body, {
    className : "date-picker-modal",
    onkeydown : ({ key }) =>  { 
      if ( key === "Enter" ) setDueDate()
    }, 
  });

  const datePickerEl = addElement( "input", datePickerModal, {
    type : "date",
  });

  const timePickerEl = addElement( "input", datePickerModal, {
    type : "time",
  });

  addElement( "button", datePickerModal, {
    textContent : "Set due time",
    onclick     : setDueDate,
  });
};


/*******************************************************************************
*  update the view of the todo list items                                      * 
*******************************************************************************/
const renderList = sortOrder => {
  sorted = sortOrder;
  if ( sorted === "none" ) removeSortIcon();

  listEl.textContent = "";

  todos.forEach( todo => {
    const listItemEl = addElement( "div", listEl, {
      className : "todo-item",
    });

    const checkBoxEl = addElement( "div", listItemEl, {
      className : "uncheck",
      onclick   : () => {
        todo.done = !todo.done;
        renderList( "none" );
      },
    });

    if ( todo.done ) {
      listItemEl.classList.add( "done" );
      checkBoxEl.className = "check";
    }

    const contentEl = addElement( "div", listItemEl, {
      className : "content-container",
    });

    const descEl = addElement( "input", contentEl, {
      value     : todo.desc,
      onchange  : () => {
        todo.desc = descEl.value;
        removeSortIcon();
      },
    });

    addElement( "span", contentEl, {
      className   : "date",
      textContent : formatDate( todo.due ),
      onclick     : () => datePicker( todo ),
    });

    addElement( "span", listItemEl, {
      className : "remove",
      onclick   : () => {
        todos.splice( todos.indexOf( todo ), 1 );
        renderList( "none" );
      },
    });
  });
};


/*******************************************************************************
*  add example items and render list                                           * 
*******************************************************************************/
const example = [
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

example.forEach( todo => todos.push( todo ) );
renderList( "none" );
