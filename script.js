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
              <li>${food.price}</li>
              <li><button class="btn-add">Add</button></li>
            </ul>`;
});
console.log(showFoods);
// add it to the DOM
list.innerHTML = showFoods;

// filter the food list according to its category when the checkbox is checkbox
const checkbox = document.querySelector('.spicy');
const handleChange = (checkbox) => {
    if (checkbox.checked === true) {
        const spicyFood = foods.filter(hotFood => {
            if (hotFood.spicy === true) {
                const myhmtl = `
                    <ul class="list-cont-md">
                      <li>${hotFood.title}
                      </li>
                      <li>${hotFood.price}
                      <li><button class="btn-add">Add</button></li>
                    </ul>
        `; // add it to the DOM
                list.innerHTML = myhmtl;
            }
            return hotFood;
        })
        console.log(spicyFood);
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