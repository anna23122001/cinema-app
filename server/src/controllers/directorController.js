const { v4: uuidv4 } = require('uuid');

const directors = [
    {
        id: uuidv4(),
        fullName: 'Steven Spielberg',
        birthYear: 1946,
        nationality: 'USA',
    },
    {
        id: uuidv4(),
        fullName: 'Ridley Scott',
        birthYear: 1937,
        nationality: 'England',
    },
    {
        id: uuidv4(),
        fullName: 'James Cameron',
        birthYear: 1954,
        nationality: 'Germany',
    },
    {
        id: uuidv4(),
        fullName: 'Brian De Palma',
        birthYear: 1940,
        nationality: 'England',
    },
];

module.exports.getDirectors = (req, res) => {
    res.status(200).send(directors)
}

module.exports.getDirectorById = (req, res) => {
    const { directorId } = req.params
    const [director] = directors.filter(director => director.id === directorId);
    if (director) {
        res.status(200).send(director)
    } else {
        res.status(404).send('Director is not found')
    }
};
