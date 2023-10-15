// const { v4: uuidv4 } = require('uuid');

// const studios = [
//     {
//         id: uuidv4(),
//         title: 'LucasFilm Ltd. LLC',
//         year_foundation: 1949,
//         location: 'USA',
//     },
//     {
//         id: uuidv4(),
//         title: '20th Century Studio',
//         year_foundation: 1935,
//         location: 'USA',
//     },
//     {
//         id: uuidv4(),
//         title: 'Columbia Pictures',
//         year_foundation: 1924,
//         location: 'USA',
//     },
//     {
//         id: uuidv4(),
//         title: 'NewLine Cinema',
//         year_foundation: 1967,
//         location: 'USA',
//     },
// ];

// module.exports.getStudios = (req, res) => {
//     res.status(200).send(studios)
// }

// module.exports.getStudioById = (req, res) => {
//     const { studioId } = req.params
//     const [studio] = studios.filter(studio => studio.id === studioId);
//     if (studio) {
//         res.status(200).send(studio)
//     } else {
//         res.status(404).send('Studio is not found')
//     }
// };