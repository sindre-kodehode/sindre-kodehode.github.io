"use strict"


/*******************************************************************************
*  global vairables                                                            *
*******************************************************************************/
// an array of the todos
const todos = [];

// store the sorted order
let currentSort = undefined;
let reversed    = false;

// an array of objects containing the name and function of different sort
// methods
const sorts = [
  { name : "done" , sort : ( a    ) => a.done ? -1 : 1               , },
  { name : "desc" , sort : ( a, b ) => a.desc.localeCompare( b.desc ), },
  { name : "due"  , sort : ( a, b ) => a.due - b.due                 , },
  { name : "added", sort : ( a, b ) => a.added - b.added             , },
];


/*******************************************************************************
*  addElement:                                                                 * 
*  add a new element to the document                                           * 
*                                                                              * 
*  type   : string, type of html element                                       * 
*  parent : Node, the parent to append the new element to                      * 
*  opts   : object, extra options to add to the new element                    * 
*                                                                              * 
*  return : Node, the new element created                                      * 
*******************************************************************************/
const addElement = ( type, parent, opts = {} ) => {

  const newEl = document.createElement( type );
  parent.append( newEl );

  // goes through the extra options and adds them to the new element
  Object.entries( opts ).forEach( ([ key, value ]) => {
    newEl[ `${key}` ] = value;
  });

  return newEl;
};


/*******************************************************************************
*  sortTodos:                                                                  * 
*  sort the todo list with the selected sort method                            * 
*                                                                              * 
*  name : string, the name of the selected sort                                * 
*  sort : function, the sort function to use                                   * 
*******************************************************************************/
const sortTodos = ( name, sort ) => {

  // if the list is already sorted with this method, just reverse the list
  if ( currentSort === name ) {
    todos.reverse();
    reversed = !reversed;
  }

  // sort the todos with the selected method
  else {
    todos.sort( sort );
    reversed = false;
  }

  renderTodos( name );
};


/*******************************************************************************
*  toggleDone:                                                                 * 
*  toggle the done state of the selected todo on/off                           * 
*                                                                              * 
*  todo : object, the selected todo                                            * 
*******************************************************************************/
const toggleDone = ( todo ) => {
  todo.done = !todo.done;
  renderTodos();
};


/*******************************************************************************
*  changeDesc:                                                                 * 
*  change the description of the selected todo                                 * 
*                                                                              * 
*  todo    : object, the selected todo                                         * 
*  newDesc : string, new description                                           * 
*******************************************************************************/
const changeDesc = ( todo, newDesc ) => {
  todo.desc = newDesc;
  renderTodos();
};


/*******************************************************************************
*  removeTodo:                                                                 * 
*  remove selected todo from the list                                          * 
*                                                                              * 
*  todo : object, the selected todo                                            * 
*******************************************************************************/
const removeTodo = ( todo ) => {
  todos.splice( todos.indexOf( todo ), 1 );
  renderTodos();
};


/*******************************************************************************
*  addTodo:                                                                    * 
*  handle adding a new todo                                                    * 
*                                                                              * 
*  key    : string, the key that was pressed                                   * 
*  target : Node, the element that triggered the event                         * 
*******************************************************************************/
const addTodo = ({ key, target }) => {

  // do nothing if the key is not enter
  if ( key && key !== "Enter" ) return;

  // do nothing if the field is empty or only contains space
  // regex:
  // ^  : start of line anchor
  //  * : selects any numer of spaces
  // $  : end of line anchor
  if ( target.value.match( /^ *$/ ) ) return;

  // add a new todo object to the end of the list with the entered text
  todos.push({
    added : new Date(),
    desc  : target.value,
    done  : false,
    due   : null,
  });

  // refocus and empty input field
  target.value = "";
  target.focus();

  renderTodos();
};


/*******************************************************************************
*  renderDate:                                                                 * 
*  format the displayed due date                                               * 
*                                                                              * 
*  date   : Date, the todo due date to format                                  * 
*  return : string, formated date                                              * 
*******************************************************************************/
const renderDate = ( date ) => {

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
    day     : "numeric",
    month   : "short",
    weekday : "short",
  });
};


/*******************************************************************************
*  pickDate:                                                                   * 
*  show a modal to pick a due date for the selected todo                       * 
*                                                                              * 
*  todo : object, the todo item to set a new due date on                       * 
*******************************************************************************/
const pickDate = ( todo ) => {

  // verify and set the due date on selected todo
  const setDueDate = ({ key }) => {

    // check if a key was pressed and if that key was enter
    if ( key !== "Enter" ) return;

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
    renderTodos();
  };

  // container for the date picker
  const datePickerModal = addElement( "div", document.body, {
    className : "date-picker-modal",
    onkeydown : setDueDate, 
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
    onclick     : setDueDate,
    textContent : "Set due time",
  });
};


/*******************************************************************************
*  renderTodos:                                                                * 
*  take all the todos and render them on the page                              * 
*                                                                              * 
*  sortOrder : string, the sort order of the todos                             * 
*******************************************************************************/
const renderTodos = newSortOrder => {

  // set the sorted order
  currentSort = newSortOrder;

  // empty the sort and todo container
  sortContainer.textContent    = "";
  todosContainerEl.textContent = "";

  // for each sort method, add a sort button and sort indicator
  sorts.forEach( ({ name, sort }) => {

    // add the appropriate sort indicator icon
    addElement( "div", sortContainer, {
      className : ( currentSort === name ) ? 
        reversed ? "reverse" : "sorted" : "unsorted",
    });

    // add a sort button
    addElement( "button", sortContainer, {
      onclick     : () => sortTodos( name, sort ),
      textContent : name,
    });
  });

  // for each todo object in the list, add the todo to the todo container
  todos.forEach( todo => {

    // todo item container
    const listItemEl = addElement( "div", todosContainerEl, {
      className : "todo-container",
    });

    // checkbox icon
    const checkBoxEl = addElement( "div", listItemEl, {
      className : "uncheck",
      onclick   : () => toggleDone( todo ),
    });

    // container for the description and due date
    const contentContainerEl = addElement( "div", listItemEl, {
      className : "content-container",
    });

    // add todo description
    const descEl = addElement( "input", contentContainerEl, {
      className : "input-active",
      value     : todo.desc,
      onchange  : ({ target }) => changeDesc( todo, target.value ),
    });

    // show the due date of the todo
    const dateEl = addElement( "span", contentContainerEl, {
      className   : "date-active",
      onclick     : () => pickDate( todo ),
      textContent : renderDate( todo.due ),
    });

    // remove todo icon
    addElement( "span", listItemEl, {
      className : "remove",
      onclick   : () => removeTodo( todo ),
    });

    // if the todo object is set to done, add styling to the text and
    // change to a checked icon
    if ( todo.done ) {
      descEl.className = "input-inactive";
      descEl.readOnly = true;

      dateEl.className = "date-inactive";
      dateEl.onclick = "";

      checkBoxEl.className = "check";
    }
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

// container for the todos
const todosContainerEl = addElement( "div", document.body );

// container for the input to add a new todo
const inputContainerEl = addElement( "div", document.body, {
  className : "todo-container",
});

// icon before input field
addElement( "span", inputContainerEl, {
  className : "pluss",
  onclick   : () => addTodo({ target : inputEl }),
});

// input field for adding a new todo
const inputEl = addElement( "input", inputContainerEl, {
  className   : "input-active",
  onkeydown   : addTodo,
  placeholder : "Add todo",
  type        : "text",
});


/*******************************************************************************
*  add example items and render list                                           * 
*******************************************************************************/
const example = [
  { 
    added : new Date( "May,26,2022" ), 
    desc  : "Yoga",
    done  : true,
    due   : new Date( "May,27,2022,11:30" ),
  }, { 
    added : new Date( "May,26,2022" ),
    desc  : "Water plants",
    done  : true,
    due   : new Date( "May,28,2022,17:30" ),
  }, { 
    added : new Date( "May,27,2022" ), 
    desc  : "Package delivery",
    done  : false,
    due   : new Date( "May,28,2022,15:00" ),
  }, { 
    added : new Date( "May,25,2022" ), 
    desc  : "Send report",
    done  : false,
    due   : new Date( "May,30,2022,17:00" ),
  },
];

example.forEach( todo => todos.push( todo ) );
renderTodos();
