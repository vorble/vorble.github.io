export class Scene {
    constructor(queue) {
        this.queue = [...queue];
    }
    hasMore() {
        return this.queue.length > 0;
    }
    next() {
        const result = this.queue.shift();
        if (result == null) {
            throw new Error('Scene Underflow!');
        }
        return result;
    }
}
