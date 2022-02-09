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
        let userInput = $('.form-input').val();
        let titleToUpper = userInput.split(" ");
        for (let i = 0; i < titleToUpper.length; i++) {
            titleToUpper[i] = titleToUpper[i].charAt(0).toUpperCase() + titleToUpper[i].slice(1);
        }
        let newTitleCapitalized = titleToUpper.join(" ");
        console.log(newTitleCapitalized);
        if(userInput == '') {
            return alert('Enter a Movie title')
        } else if (newMovies.includes(newTitleCapitalized)) {
            return alert ('That Movie title is already part of the list')
        } else {
            let movieTitleFinal = {'title': newTitleCapitalized, 'rating': (Math.random(10)*10).toFixed(1)};
            newMovies.push(movieTitleFinal);
            updateUi(movieTitleFinal);
            $('.form-input').val('');
        }        
    })

    //DELETE MOVIE    
    $('table').on('click', '.delete-btn', function() {
        let $indexId = this.id;
        newMovies.splice($indexId, 1);
        newMovies = newMovies;
        $('.table-body').html('');
        $.each(newMovies, function(index, value) {
            $('.table-body').append('<tr class="list-item"><td id="title" class="movie-title">'+value.title+'</td><td id="rating" class="movie-rating">'+value.rating+'</td><td><button id='+index+'>Delete</button></td>');
            $('td button').addClass('btn');
            $('td button').addClass('delete-btn');
        })
    })

    // SORT MOVIES    
    $('th').each(function(column) {
        $(this).click(function() {
            let content = $('table').find('tbody > tr');
            content.sort(function(a, b) {
                let aValue = $(a).children('td').eq(column).text();
                let bValue = $(b).children('td').eq(column).text();
                if(aValue < bValue) {
                    return -1; 
                } else if (aValue > bValue) {
                    return 1;
                } else {
                    return;
                }
            });
            $.each(content, function(index, row) {
                $('tbody').append(row);
            })
        })
    }); 

    // SEARCH BAR   
    $('.form-input').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('.list-item').each(function(index, value) {
            var titles = $('.movie-title')[index].innerText.toLowerCase();
            for(let i = 0; i < titles.length; i++) {
                if(titles.indexOf(searchTerm) > -1) {
                    $(value).show();
                } else {
                    $(value).hide();
                }
            }      
        })
    })    
    
    // UPDATE UI SUPPORT FUNCTION
    function updateUi(value) {
        $('.table-body').append('<tr class="list-item"><td id="title" class="movie-title">'+value.title+'</td><td id="rating" class="movie-rating">'+value.rating+'</td><td><button id='+(newMovies.length - 1)+'>Delete</button></td>');
        $('td button').addClass('btn');
        $('td button').addClass('delete-btn');
    }  
})

