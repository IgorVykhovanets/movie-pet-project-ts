import Joi from "joi";

export const searchValidation = Joi.object({
    data: Joi.string().min(3).max(20).required().messages({
        'string.empty': 'Sorry, buy this form can not empty !',
        'string.min': 'Sorry, but the minimum must be 3 symbol !',
        'string.max': 'Sorry, but the maximum can be 20 symbol !',
    }),
})