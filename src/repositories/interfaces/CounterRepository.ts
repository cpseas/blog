export interface ICounterRepository {
    getNextSequence(collection: string): Promise<number | null>
}