//Movie Class
class Movie
{
    constructor(
        title, 
        year, 
        director, 
        gender,
        duration
    ) {
        this.title = title
        this.year = year
        this.director = director
        this.gender = gender
        this.actors = []
        this.duration = duration
    }

    Reproduce() {
        console.log('Play >')
    }

    Pause() {
        console.log('Pause ||')
    }

    Forward() {
        console.log('Forward >>')
    }

    Backward() {
        console.log('Backward <<')
    }

    Close() {
        console.log('Close X')
    }

    Info() {
        console.log(
            `
                Title: ${this.title}
                Year: ${this.year}
                Director: ${this.director}
            `
        )
    }
}

//Movie Objects
let Avengers = new Movie(
    'Ultimate Avengers',
    2019,
    'Anthony Russo',
    'Action',
    120
);

Avengers.Info();
Avengers.Reproduce();

let Batman = new Movie(
    'The Batman',
    2021,
    'Matt Reeves',
    'Action',
    ['Robert'],
    120
);

Batman.Info();
Batman.Reproduce();