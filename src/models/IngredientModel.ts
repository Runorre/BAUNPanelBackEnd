import { Schema, model } from 'mongoose'
import { IIngredient } from '../types/database/IIngredient'
import { StockageType } from '../types/enum/enumStockageType'

const IngredientSchema = new Schema<IIngredient>({
    name : {
        type : String,
        required : true
    },
    icon : {
        type : Schema.Types.ObjectId,
        required : true,
    },
    stockage : {
        type: Number,
        enum : StockageType,
        required: true
    }
})

const IngredientModel = model<IIngredient>("Ingredient", IngredientSchema)

export default IngredientModel