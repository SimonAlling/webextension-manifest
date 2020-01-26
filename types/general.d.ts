/**
 * AllOrNothing<T> represents either T or nothing.
 * It is different from Partial<T> in that it requires all or no keys from T.
 */
export type AllOrNothing<T> = Either<T, {}>

/**
 * Either makes it possible to have mutually exclusive keys.
 * For example, Person must have either age or birthDate, but cannot have both:
 *
 *     type Person = Either<{ age: number }, { birthDate: Date }>
 *
 */
export type Either<A, B> = (A & NothingFrom<B>) | (B & NothingFrom<A>)

/**
 * NonEmptyArray represents non-empty arrays.
 */
export type NonEmptyArray<T> = [T, ...T[]]

/**
 * NothingFrom<T> represents all types that don't have any of the keys in T.
 */
export type NothingFrom<T> = { [P in keyof T]?: never }
