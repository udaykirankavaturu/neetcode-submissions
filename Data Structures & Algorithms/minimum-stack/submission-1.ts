class MinStack {
    #valuesStack: number[];
    #minStack: number[];

    constructor() {
        this.#valuesStack = [];
        this.#minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.#valuesStack.push(val);

        if(this.#minStack.length > 0){
            const currentMin = this.#minStack[this.#minStack.length-1];
            if(val<=currentMin){
                // new min found
                this.#minStack.push(val);
            }
        } else {
            this.#minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const popped = this.#valuesStack.pop();
        const currentMin = this.#minStack[this.#minStack.length-1];

        if(popped == currentMin){
            this.#minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.#valuesStack[this.#valuesStack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.#minStack[this.#minStack.length-1];
    }
}
