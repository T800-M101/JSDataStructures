// Stacks:
// - has constant time 0(1) Ffor all these methods
// - does not have random access
// - stack are good at undo and redo operations,parenthesis Matching and functions that  calls stacks

// Stacks Methods
// .push() - adds to top
// .pop() - removes from top
// .peek() - looks at top
// .size() - give the size of the stack
// .isEmpty() - return true or false
//**************************************************************************************/
//Create a class to keep tracking of the nodes to push in the stack
class StackNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//Create the stack
class LinkedStack {
    // The constructor instantiate a new stack with property top equals null  and size property equals 0
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.top === null;
    }

    length() {
            return this.size;
        }
        //Push method create an instance of the class StackNode
        //node is initialized with the value null taken fron the property top of the stack
        //The property top is setted
    push(value) {
        let node = new StackNode(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        let result = this.top;
        this.top = this.top.next;
        this.size--;
        return result.data;
    }

    peek() {
        return this.top.data;
    }
}

let stack = new LinkedStack();

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.isEmpty());
console.log(stack.length());
stack.pop();

while (!stack.isEmpty()) {
    let value = stack.pop();
    console.log(value);
}