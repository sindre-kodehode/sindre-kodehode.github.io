"use strict"


/*******************************************************************************
*  global vairables                                                            *
*******************************************************************************/
// store the sorted order
let sorted = "none";

// an array of the todos
const todos = [];

// an array of objects containing the name and function of different sort
// methods
const sorts = [
  { name : "done" , sort : ( a    ) => a.done ? -1 : 1               , },
  { name : "desc" , sort : ( a, b ) => a.desc.localeCompare( b.desc ), },
  { name : "due"  , sort : ( a, b ) => a.due - b.due                 , },
  { name : "added", sort : ( a, b ) => a.added - b.added             , },
];


/*******************************************************************************
*  global functions                                                            *
*******************************************************************************/
// addElement:
// type   : string, type of html element
// parent : Node, the parent to append the new element to
// opts   : object, extra options to add to the new element
// return : Node, the new element created
const addElement = ( type, parent, opts = {} ) => {
  const newEl = document.createElement( type );
  parent.append( newEl );

  // goes through the extra options and adds them to the new element
  Object.entries( opts ).forEach( ([ key, value ]) => {
    newEl[ `${key}` ] = value;
  });

  return newEl;
};

// removeSortIcon:
const removeSortIcon = () => {
  // finds all the elements with a sort icon and removes them
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
// header
addElement( "h1", document.body, {
  textContent : "Todo List",
});

// container for the sort buttons
const sortContainer = addElement( "div", document.body, {
  className : "sort-container"
});

// goes through all the sort objects ,adds a button and attaches a sort
// function on click
sorts.forEach( ({ name, sort }) => {
  const button = addElement( "button", sortContainer, {
    textContent : name,
    onclick     : () => {
      removeSortIcon();

      // if the todos are already sorted by this method, reverse the sort
      if ( sorted === name ) {
        button.classList.add( "sorted-reverse" );
        todos.reverse();
        renderTodos( name );
      }

      // sort the todos, add a sort indicator icon and rernder the list
      else {
        button.classList.add( "sorted" );
        todos.sort( sort );
        renderTodos( name );
      }
    },
  });
});

// container for the todos
const todosContainerEl = addElement( "div", document.body );

// container for the input to add a new todo
const inputContainerEl = addElement( "div", document.body, {
  className : "input-container",
});

// add icon before input field
addElement( "span", inputContainerEl, {
  className : "pluss",
  onclick   : () => inputEl.focus(),
});

// add an input field and function to handle adding a new todo
const inputEl = addElement( "input", inputContainerEl, {
  type        : "text",
  placeholder : "Add todo",
  onkeydown   : ({ key, target }) => {
    // do nothing if the key is not enter
    if ( key !== "Enter" ) return;

    // do nothing if the field is empty or only contains space
    // regex:
    // ^  : start of line anchor
    //  * : selects any numer of spaces
    // $  : endof line anchor
    if ( target.value.match( /^ *$/ ) ) return;

    // add a new todo object to the end of the list with the entered text
    todos.push({
      desc  : target.value,
      due   : null,
      added : new Date(),
      done  : false,
    });

    // refocus and empty input field
    target.value = "";
    target.focus();

    // rerender todos
    renderTodos( "none" );
  },
});


/*******************************************************************************
*  format the displayed due date                                               * 
*******************************************************************************/
// formatDate:
// date   : Date, the todo due date to format
// return : string, formated date
const formatDate = date => {
  // if no due date, return prompt text
  if ( !date ) return "Pick a date...";

  // today's date
  const today = new Date();

  // tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate( tomorrow.getDate() + 1 )

  // if the due date is today, only show the time
  if ( date.toDateString() === today.toDateString() ) {
    return date.toLocaleString( undefined, {
      hour   : "numeric",
      minute : "numeric",
    });
  }

  // if the due date is tomorrow, show "Tomorrow" and the time
  if ( date.toDateString() === tomorrow.toDateString() ) {
    return "Tomorrow " + date.toLocaleString( undefined, {
      hour   : "numeric",
      minute : "numeric",
    });
  }

  // else show the weekday, month and day
  return date.toLocaleString( undefined, {
    weekday : "short",
    month   : "short",
    day     : "numeric",
  });
};


/*******************************************************************************
*  show a date and time field to pick a due date                               * 
*******************************************************************************/
// datePicker:
// todo : object, the todo item to set a new due date on
const datePicker = todo => {

  // verify and set the due date on selected todo
  const setDueDate = () => {
    // if there is no previous due date, create a new Date object
    if ( !todo.due ) todo.due = new Date();

    // if a date is entered, add it to the todo object
    if ( datePickerEl.valueAsDate ) {
      todo.due.setDate( datePickerEl.valueAsDate.getDate() );
    }

    // if a time is entered, add it to the todo object
    if ( timePickerEl.valueAsDate ) {
      todo.due.setHours( timePickerEl.valueAsDate.getHours() );
      todo.due.setMinutes( timePickerEl.valueAsDate.getMinutes() );
    }

    // remove the modal and rerender the todos
    datePickerModal.remove();
    renderTodos( "none" );
  };

  // container for the date picker
  const datePickerModal = addElement( "div", document.body, {
    className : "date-picker-modal",
    onkeydown : ({ key }) =>  { 
      // add the entered date if enter is pressed
      if ( key === "Enter" ) setDueDate()
    }, 
  });

  // date picker input field
  const datePickerEl = addElement( "input", datePickerModal, {
    type : "date",
  });

  // time picker input field
  const timePickerEl = addElement( "input", datePickerModal, {
    type : "time",
  });

  // confirm button
  addElement( "button", datePickerModal, {
    textContent : "Set due time",
    onclick     : setDueDate,
  });
};


/*******************************************************************************
*  update the view of the todo list items                                      * 
*******************************************************************************/
const renderTodos = sortOrder => {

  // set the sorted order
  sorted = sortOrder;
  // if the sorted order is "none", remove the sort icon
  if ( sorted === "none" ) removeSortIcon();

  // empty the todo container
  todosContainerEl.textContent = "";

  // for each todo object in the list, add the todo to the todo container
  todos.forEach( todo => {
    // todo item container
    const listItemEl = addElement( "div", todosContainerEl, {
      className : "todo-item",
    });

    // checkbox icon
    const checkBoxEl = addElement( "div", listItemEl, {
      className : "uncheck",
      // toggle the done state of the todo object and rerender todos
      onclick   : () => {
        todo.done = !todo.done;
        renderTodos( "none" );
      },
    });

    // if the todo object is set to done, add styling to the text and
    // change to a checked icon
    if ( todo.done ) {
      listItemEl.classList.add( "done" );
      checkBoxEl.className = "check";
    }

    // container for the description and due date
    const contentEl = addElement( "div", listItemEl, {
      className : "content-container",
    });

    // add todo description
    const descEl = addElement( "input", contentEl, {
      value     : todo.desc,
      // change the description of the todo when the text has changed
      onchange  : () => {
        todo.desc = descEl.value;
        removeSortIcon();
      },
    });

    // show the due date of the todo
    addElement( "span", contentEl, {
      className   : "date",
      // format the due date
      textContent : formatDate( todo.due ),
      // show a date picker modal on click
      onclick     : () => datePicker( todo ),
    });

    // remove todo icon
    addElement( "span", listItemEl, {
      className : "remove",
      // remove selected todo from list and rerender todos
      onclick   : () => {
        todos.splice( todos.indexOf( todo ), 1 );
        renderTodos( "none" );
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
renderTodos( "none" );
