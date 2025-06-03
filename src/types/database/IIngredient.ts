import { Types, Document } from 'mongoose';

export interface IIngredient extends Document {
    name: string;
    icon : Types.ObjectId;
    stockage : number;
}
