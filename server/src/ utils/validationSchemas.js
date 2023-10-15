const yup = require('yup');

module.exports.PERSON_VALIDATION_SCHEMA = yup.object().shape({
        full_name: yup.string().trim().min(1).max(30).required(),
        birth_year: yup.number().positive()
});

module.exports.MOVIE_VALIDATION_SCHEMA = yup.object().shape({
        title: yup.string().trim().min(1).required(),
        relise_year: yup.number().positive()
});

module.exports.STUDIO_VALIDATION_SCHEMA = yup.object().shape({
        title: yup.string().trim().min(1).required(),
        year_foundation: yup.number().positive()
});

module.exports.GENRE_VALIDATION_SCHEMA = yup.object().shape({
        title: yup.string().trim().min(1).max(30).required()
});