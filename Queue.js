


function createQueue(){
    const queue = [];
    return{
        enqueue(elem){
            queue.unshift(elem);
        },
        dequeue(){
           return queue.pop();
        },
        peek(){
            return queue[queue.length - 1]
        },
        get length(){
            return queue.length
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}


const testQueue = createQueue();
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4);
testQueue.enqueue(5);
testQueue.enqueue(6);
testQueue.enqueue(7);
console.log(testQueue.peek());
console.log(testQueue.length);
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
console.log(testQueue.peek());
console.log(testQueue.length);