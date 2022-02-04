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


$(document).ready(function() {
    
    // LOAD DEFAULT MOVIES LIST DINAMICALLY
    $.each(defaultMovies, function(index, value) { 
        newMovies.push(value);
        updateUi(value); 
    })

    // ADD MOVIE
    $('.add-btn').click(function(e) {
        e.preventDefault();
        var userInput = $('.form-input').val();
        var newTitle = {'title': userInput, 'rating': (Math.random(10)*10).toFixed(1)};
        newMovies.push(newTitle);
        updateUi(newTitle);
        $('.form-input').val('');
    })

    //DELETE MOVIE    
    $('table').on('click', '.delete-btn', function() {
        var $indexId = this.id;
        console.log($indexId);
        newMovies.splice($indexId, 1);
        $('table').html('');
        $.each(newMovies, function(index, value) {            
            updateUi(value)
        })
    })
    
    // UPDATE UI SUPPORT FUNCTION
    function updateUi(value) {
        $('.movies-table-list').append('<tr class="list-item"><td id="title" class="movie-title">'+value.title+'</td><td id="rating" class="movie-rating">'+value.rating+'</td><td><button id='+(newMovies.length - 1)+'>Delete</button></td>');
        $('td button').addClass('btn');
        $('td button').addClass('delete-btn');
    }  
})

// // IMPORTANT SELECTORS
// let table = $('table');
// let addBtn = $('.add-btn');
// let inputBox = $('.form-input');
// let sortMovieList = $('.theader-title');
// let sortRatingList = $('.theader-rating');


// $(document).ready(function(){
    
//     $.each(defaultMovies, loadList);
//     $(addBtn).click(addNewMovie);
//     $(sortMovieList).click(sortList);
//     $(sortRatingList).click(sortList);


//     // LOAD LIST DINAMICALLY
//     function loadList (index, value) {
//         updateUi(index, this.title, this.rating); 
//         newMovies.push(value);    
//     }; 

//     // FUNCTIONS
//     // UPDATE UI
//     function updateUi(index, title, rating) {
//         table.append
//         ('<tr class="list-item"><td id="title" class="movie-title">'+title+'</td><td id="rating" class="movie-rating">'+rating+'</td><td><button id='+index+'>Delete</button></td>');
//         $('td button').addClass('btn');
//         $('td button').addClass('delete-btn');
//         $('td button').addClass('movie-item-btn');
//     }

//     // ADD NEW TITLE 
//     function addNewMovie(event) {
//         event.preventDefault();
//         let newTitle = {
//                         title: $(inputBox).val(),
//                         rating: (Math.random(10)*10).toFixed(1)
//                     };
//         newMovies.push(newTitle);      
//         $(inputBox).val('');
//         updateUi(newMovies.length -1, newTitle.title, newTitle.rating)
//     }     

//     // DELETE TITLE
//     $('table').on('click', '.delete-btn', function()  {
//         console.log(this.id)
//         var idItem = this.id;
//     })

//     // SORT LIST
//     function sortList(event) {
//         let newArrSort = [];
//         console.log(event.target.id);
//         let idListing = $(document).find('td#'+event.target.id+'');
//         $.each(idListing, function(index, value) {
//             console.log(index, value)
//             newMovies.push(value.innerText)
//         })            
//     }

    
   
// })


// // // $('p:has(i)').hide();

// // var newArr = $('ul#list li').toArray();
//             // console.log(newArr)
//             // $.each(newArr, function(index, value) {
//             //     console.log(value.innerHTML);
//             // })