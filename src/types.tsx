type FunctionCell = 0 | 1;

export type Cells = FunctionCell[]

type Hash = {
    plaintext: string;
    digest: string;
    index: number;
}

export type Hashes = Hash[];