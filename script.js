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