import { CounterModel } from '../models'
import { ICounterRepository } from './interfaces'

export const CounterRepository = (): ICounterRepository => {
    const getNextSequence = async (collection: string): Promise<number | null> => {
        const counter = await CounterModel.findOneAndUpdate(
            { _id: collection },
            { $inc: { sequence: 1 } },
            { new: true, upsert: true }
        )
        return counter.sequence
    }

    return {
        getNextSequence
    }
}