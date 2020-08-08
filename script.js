console.log('it works');
const foods = [{
        id: 'ravitoto',
        price: 5000,
        title: 'Ravitoto',
        spicy: true,
        vegetarian: false,
    },
    {
        id: 'pasta',
        price: 4000,
        title: 'Pasta',
        spicy: true,
        vegetarian: true,
    },
    {
        id: 'burger',
        price: 5000,
        title: 'Burger',
        spicy: false,
        vegetarian: false,
    },
    {
        id: 'rice',
        price: 2000,
        title: 'Rice and Leaves',
        spicy: false,
        vegetarian: true,
    },
    {
        id: 'mofogasy',
        price: 500,
        title: 'Mofogasy',
        spicy: false,
        vegetarian: false,
    },
];

// create the modal to show the total cost 
// grab modal
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');

// map through the array to generate them in the html
const list = document.querySelector('.list-container');
const showFoods = foods.map(food => {
    // return the html
    return `<ul class="list-cont-md">
              <li>${food.title}</li>
              <li>${food.price}Ar</li>
              <li><button class="btn-add">Add</button></li>
            </ul>`;
});
console.log(showFoods);
// add it to the DOM
list.innerHTML = showFoods.join('');

// filter the food list according to its category when the checkbox is checkbox
// this is the spicy list
const checkbox = document.querySelector('.spicy'); // the input checkbox
const handleChange = (checkbox) => {
    if (checkbox.checked === true) {
        const spicyFood = foods.filter(spicyF => spicyF.spicy === true); // filter the object first
        const hotSpicy = spicyFood.map(hotFood => // map to generate all itmes
                ` 
                    <ul class="list-cont-md">
                      <li>${hotFood.title}🔥
                      </li>
                      <li>${hotFood.price}Ar
                      <li><button class="btn-add">Add</button></li>
                    </ul>
        `) // add it to the DOM
        list.innerHTML = hotSpicy.join('');
    } else if (checkbox.checked === false) {
        list.innerHTML = showFoods.join('');
    }
}

// this is for the vegeterian
const checkbox2 = document.querySelector('.vegetarian');
const handleChange2 = (checkbox) => {
    if (checkbox.checked === true) {
        const vaegetarianFood = foods.filter(vegetF => vegetF.vegetarian === true); // filter the array
        const vegFood = vaegetarianFood.map(vgsFd => // map to generate all the items
                `
                    <ul class="list-cont-md">
                      <li>${vgsFd.title}
                      </li>
                      <li>${vgsFd.price}Ar
                      <li><button class="btn-add">Add</button></li>
                    </ul>
        `) // add it to the DOM
        list.innerHTML = vegFood.join('');
    } else if (checkbox.checked === false) {
        list.innerHTML = showFoods.join('');
    }
}

// open modal
const showModal = () => {
        // add class open
        outerModal.classList.add('open');
        // showing the final total
    }
    // listen for the confirm btn
window.addEventListener('click', event => {
    if (event.target.matches('.confirm-btn')) {
        showModal();
    }
});

// handle escape key
const handleEsc = event => {
    if (event.key === "Escape") {
        outerModal.classList.remove('open');
    }
};

window.addEventListener('keyup', handleEsc);