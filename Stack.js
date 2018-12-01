

function createStack(){

    const stack = [];
    return {
        push(item){
            stack.push(item)
        },
        pop(){
            stack.pop();
        },
        isEmpty(){
            return stack.length === 0;
        },
        peek(){
            return stack[stack.length -1]
        },
        get length(){
            return stack.length
        }
    }
}


const testStack = createStack();
testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
console.log(testStack.peek());
testStack.pop();
console.log(testStack.peek());
console.log(testStack.length);
