import { model, Schema} from 'mongoose'
import { ICounter } from './interfaces'

const CounterSchema: Schema<ICounter> = new Schema<ICounter>({
    _id: {
        type: String,
        required: true
    },
    sequence: {
        type: Number,
        default: 0
    }
})

export const CounterModel = model<ICounter>('Counter', CounterSchema)