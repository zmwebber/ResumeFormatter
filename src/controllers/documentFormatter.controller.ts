import { Router, Response, Request } from "express";
import { check, validationResult } from "express-validator";
import HttpStatusCodes from "http-status-codes";
import QueryString from 'qs';



export async function createResume(req: Request, res: Response) {

    try {
        const body = req.body;
        if (body) {
            //function to process resume
            const message = { success: true };
            res.status(200).json({ data: message });
        }
        else {
            res.status(400).json({ message: 'Invalid Body' });
        }

    }      
    catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
}
}