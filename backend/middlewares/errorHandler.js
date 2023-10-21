// En errorHandler.js

import { statusCodes } from "./statusCodes.js";

// Función simplificada para crear manejadores de respuesta
function createHandler(statusCode, category, handler) {
    return function(dataOrMessage) {
        const response = { status: statusCode };
        if (dataOrMessage) {
            response.body = { status: category, message: dataOrMessage };
        }
        return response;
    };
}

// Crear los manejadores de respuesta usando el objeto statusCodes
const responseHandlers = Object.fromEntries(
    Object.entries(statusCodes).flatMap(([category, handlers]) =>
        Object.entries(handlers).map(([handler, status]) => [
            handler,
            createHandler(status, category, handler)
        ])
    )
);

export function handleResponses(req, res, next) {
    Object.entries(responseHandlers).forEach(([name, handler]) => {
        res[name] = function(...args) {
            const result = handler(...args);
            if (result.body) {
                res.status(result.status).json(result.body);
            } else {
                res.status(result.status).send();
            }
        };
    });
    next();
}
