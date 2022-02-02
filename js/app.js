let defaultMovies = [
    {
        title: "Doctor Strange",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Eternals",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Big Hero 6",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Black Panther",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "42",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Pacific Rim",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Battleship",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Venom",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Draft Day",
        rating: (Math.random(10)*10).toFixed(1)
    },
    {
        title: "Any Given Sunday",
        rating: (Math.random(10)*10).toFixed(1)
    }
];

let newMovies = [];

// IMPORTANT SELECTORS
let table = $('table');
let addBtn = $('.add-btn');
let inputBox = $('.form-input');
let sortMovieList = $('.theader-title');
let sortRatingList = $('.theader-rating');


$(document).ready(function(){

    $.each(defaultMovies, loadList);
    $(addBtn).click(addNewMovie);
    $(sortMovieList).click(sortList);
    $(sortRatingList).click(sortList);


    // LOAD LIST DINAMICALLY
    function loadList (index, value) {
        updateUi(index, this.title, this.rating); 
        newMovies.push(value);    
    }; 

    // FUNCTIONS
    // UPDATE UI
    function updateUi(index, title, rating) {
        table.append
        ('<tr class="list-item"><td id="title" class="movie-title">'+title+'</td><td id="rating" class="movie-rating">'+rating+'</td><td><button id='+index+'>Delete</button></td>');
        $('td button').addClass('btn');
        $('td button').addClass('delete-btn');
        $('td button').addClass('movie-item-btn');
    }

    // ADD NEW TITLE 
    function addNewMovie(event) {
        event.preventDefault();
        let newTitle = {title: $(inputBox).val(),
                        rating: (Math.random(10)*10).toFixed(1)
                    };
        newMovies.push(newTitle);      
        $(inputBox).val('');
        updateUi(newMovies.index, newTitle.title, newTitle.rating)
    }
    
    

    // SORT LIST
    function sortList(event) {
        console.log(event.target.id);
        let idListing = $(document).find('td#'+event.target.id+'');
        idListing.each((index, value) => {
            console.log(value.innerText);
            let listArray = idListing.bind(value.innerText);
    
        })
    
        
    }

    
   
})


// $('p:has(i)').hide();

