import { Schema, model } from 'mongoose'
import { ICocktails } from '../types/database/ICocktails'

const CocktailsSchema = new Schema<ICocktails>({
    name: {
        type : String,
        required : true
    },
    icon : {
        type : Schema.Types.ObjectId,
    },
    receipt : [{
        ingredient: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
            required: true
        },
        amount: {
            type: Number,
            default : 0
        }
    }],
    price: {
        type: String,
        required: true
    }
})

const CocktailsModel = model<ICocktails>('Cocktails', CocktailsSchema)

export default CocktailsModel