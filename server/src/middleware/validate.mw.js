const yup = require('yup');

module.exports.validatePerson = async (req, res, next) => {
    const { body } = req;

    const PERSON_VALIDATION_SCHEMA = yup.object().shape({
        full_name: yup.string().trim().min(1).max(30).required(),
        birth_year: yup.number().positive()
    });
    
    try {
        const validatedPerson = await PERSON_VALIDATION_SCHEMA
            .validate(body, { abortEarly: false });
        req.body = validatedPerson;
        next()
    } catch (error) {
        next(`Error is: ${error.errors}`);
    }

    // Promises
    // PERSON_VALIDATION_SCHEMA.validate(body, {abortEarly: false})
    //     .then((validatedPerson) => {
    //         req.body = validatedPerson;
    //         next();
    //     })
    //     .catch((error) => {
    //         next(`Error is: ${error.errors}`);
    //     })
}

