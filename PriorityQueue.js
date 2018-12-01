


function createPriorityQueue(){
    const lowPriorityQueue = [];
    const highPriorityQueue = [];
    return{
        enqueue(elem,priority = 'low'){
            if(priority === 'high') {
                highPriorityQueue.unshift(elem);
            }
            else{
                lowPriorityQueue.unshift(elem);
            }
        },
        dequeue(){
            if(highPriorityQueue.length > 0){
                return highPriorityQueue.pop();
            }
            return lowPriorityQueue.pop();
        },
        peek(){
            if(highPriorityQueue.length > 0){
                return highPriorityQueue[highPriorityQueue.length - 1];
            }
            return lowPriorityQueue[lowPriorityQueue.length - 1];
        },
        get length(){
            return lowPriorityQueue.length + highPriorityQueue.length;
        },
        isEmpty() {
            return lowPriorityQueue.length === 0 && highPriorityQueue.length === 0;
        }
    }
}


const testQueue = createPriorityQueue();
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(4,'high');
testQueue.enqueue(5);
testQueue.enqueue(6);
testQueue.enqueue(7,'high');
console.log(testQueue.peek());
console.log(testQueue.length);
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
testQueue.dequeue();
console.log(testQueue.peek());
console.log(testQueue.length);