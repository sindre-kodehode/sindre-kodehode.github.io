"use strict"

const listitemCheckBoxes = document.querySelectorAll( "input" );

listitemCheckBoxes.forEach( checkBox => {
  checkBox.addEventListener( "click",
    ({
       target: {
         parentElement: { classList: todoItem }
      } ,
       target: { checked: checked }
    }) => {
       checked?
       todoItem.add( "done" ):
       todoItem.remove( "done" );
  });
});
