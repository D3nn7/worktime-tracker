/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *        email:
 *          type: string
 *          format: email
 *        name:
 *          type: string
 *        verified:
 *          type: boolean
 *        createdAt:
 *          type: string
 *          format: date-time
 *        updatedAt:
 *          type: string
 *          format: date-time
 *        preferences:
 *          type: object
 */

export interface User {
        id: string;
        email: string;
        name: string;
        verified: boolean;
        createdAt: string;
        updatedAt: string;
        preferences: any;
}