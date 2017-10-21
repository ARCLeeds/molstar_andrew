/**
 * Copyright (c) 2017 molio contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

interface SetLike<T> {
    readonly size: number;
    add(a: T): boolean;
    has(a: T): boolean;
}

class HashSetImpl<T> implements SetLike<T> {
    size: number = 0;
    private byHash: { [hash: number]: T[] } = Object.create(null);

    add(a: T) {
        const hash = this.getHash(a);
        if (this.byHash[hash]) {
            const xs = this.byHash[hash];
            for (const x of xs) {
                if (this.areEqual(a, x)) return false;
            }
            xs[xs.length] = a;
            this.size++;
            return true;
        } else {
            this.byHash[hash] = [a];
            this.size++;
            return true;
        }
    }

    has(v: T) {
        const hash = this.getHash(v);
        if (!this.byHash[hash]) return false;
        for (const x of this.byHash[hash]) {
            if (this.areEqual(v, x)) return true;
        }
        return false;
    }

    constructor(private getHash: (v: T) => any, private areEqual: (a: T, b: T) => boolean) { }
}

function HashSet<T>(getHash: (v: T) => any, areEqual: (a: T, b: T) => boolean): SetLike<T> {
    return new HashSetImpl<T>(getHash, areEqual);
}

export default HashSet;