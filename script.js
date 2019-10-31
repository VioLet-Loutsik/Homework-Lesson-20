class Menu {   // homework, point 1 and 2
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  firstbutton() {
    alert('You clicked First button');
    console.log("You clicked First button");
  }

  secondbutton() {
    alert('You clicked Second button');
    console.log("You clicked Second button");
  }

  thirdbutton() {
    alert('You clicked Third button');
    console.log("You clicked Third button");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

new Menu(menu);  

// i tried to do the third point of homework

const firstbutton = document.querySelector('firstbutton');
const secondbutton = document.querySelector('secondbutton');
const thirdbutton = document.querySelector('thirdbutton');

let handler = function(event) {
  console.log(event);
}

firstbutton.addEventListener('click', handler, function() {
  console.log("You clicked First button");
},true);

secondbutton.addEventListener('click', function() {
  console.log("You clicked Second button");
},true);

thirdbutton.addEventListener('click', function() {
  console.log("You clicked Third button");
});


