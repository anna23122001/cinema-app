const {PERSON_VALIDATION_SCHEMA} = require('../ utils/validationSchemas')
const {MOVIE_VALIDATION_SCHEMA} = require('../ utils/validationSchemas')
const { STUDIO_VALIDATION_SCHEMA } = require('../ utils/validationSchemas')
const {GENRE_VALIDATION_SCHEMA } = require('../ utils/validationSchemas')

module.exports.validatePerson = async (req, res, next) => {
    const { body } = req;

    try {
        const validatedPerson = await PERSON_VALIDATION_SCHEMA
            .validate(body, { abortEarly: false });
        req.body = validatedPerson;
        next()
    } catch (error) {
        next(`Error is: ${error.errors}`);
    }
};

module.exports.validateMovie = async (req, res, next) => {
    const { body } = req;

    try {
        const validatedMovie = await MOVIE_VALIDATION_SCHEMA
            .validate(body, { abortEarly: false });
        req.body = validatedMovie;
        next()
    } catch (error) {
        next(`Error is: ${error.errors}`);
    }
}

module.exports.validateStudio = async (req, res, next) => {
    const { body } = req;

    try {
        const validatedStudio = await STUDIO_VALIDATION_SCHEMA
            .validate(body, { abortEarly: false });
        req.body = validatedStudio;
        next()
    } catch (error) {
        next(`Error is: ${error.errors}`);
    }
}

module.exports.validateGenre = async (req, res, next) => {
    const { body } = req;

    try {
        const validatedGenre = await GENRE_VALIDATION_SCHEMA
            .validate(body, { abortEarly: false });
        req.body = validatedGenre;
        next()
    } catch (error) {
        next(`Error is: ${error.errors}`);
    }
}

