const score: Array<number> = []
const names: Array<number> = []

function identity1(val: boolean | number): boolean | number {
    return val
}

function identity2(val: any): any {
    return val
}

function identity3<Type>(val: Type): Type {
    return val
}

identity3(3)
identity3("prats")
identity3(true)

function identity4<T>(val: T): T {
    return val
}

interface bottle {
    brand: string,
    type: number
}

// identity4<bottle>({})