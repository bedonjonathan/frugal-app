export const apiURL = () => {
    if ( 
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test'
    ) {
        // return 'http://localhost:3001'
        return 'https://mega-frugal-app.herokuapp.com'
    }  
    return `https://mega-frugal-app.herokuapp.com`;
}

