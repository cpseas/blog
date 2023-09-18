import bcrypt from 'bcryptjs'

type HashPassword = (password: string) => Promise<string>
type ComparePasswords = (password: string, hashedPassword: string) => Promise<boolean>

export const hashPassword: HashPassword = async (password: string): Promise<string> => {
    try {
        const salt = bcrypt.genSaltSync()
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        throw new Error('Failed to hash password...')
    }
}

export const comparePasswords: ComparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const passwordsMatch = await bcrypt.compare(password, hashedPassword)
        return passwordsMatch
    } catch (error) {
        throw new Error('Failed to compare passwords...')
    }
}