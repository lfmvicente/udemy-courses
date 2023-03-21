class Movie
{
    constructor() {
        this.title = ''
        this.year = 0
        this.director = ''
        this.gender = ''
        this.actors = []
        this.duration = 0
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
}