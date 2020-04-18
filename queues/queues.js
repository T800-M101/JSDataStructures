class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(data) {
        console.log("ENQUEUE", data);
        // create a new node with data
        let node = new QueueNode(data);
        //if queue is empty
        if (this.isEmpty()) {
            //point front and back to new node
            this.front = this.back = node;
        } else {
            //else the queue is not empty push the node to back of the queue
            //by pointing the last node to the newly created node
            this.back.next = node;
            //move back pointer to new node
            this.back = node;
        }
        this.print();
    }
    print() {
        //If queue is empty
        if (this.isEmpty()) {
            console.log("EMPTY QUEUE!");
            //else it is not empty
        } else {
            //temp arr
            let tmpArr = [];
            //tmp variable to the front of the queue
            let tmp = this.front;
            // iterate through the queue
            while (tmp) {
                //add data into temp arr
                tmpArr.push(tmp.data);
                //move to the next element
                tmp = tmp.next;
            }
            // print data
            console.log(tmpArr.join(","));
        }
    }

    dequeue() {
        //pointer to front of the queue
        let node = this.front;
        console.log("DEQUEUE", node ? node.data : "");

        //if queue is not empty
        if (!this.isEmpty()) {
            //move front to the next element
            this.front = this.front.next;
        }

        //check is front is null / past the end of the queue
        if (!this.front) {
            // set back to null
            this.back = null;
        }

        //print
        this.print();
        //returning node at the front of the queue
        return node;
    }
}

let qq = new Queue();
qq.enqueue("A");
qq.enqueue("B");
qq.enqueue("C");
qq.enqueue("D");
qq.enqueue("E");
qq.dequeue();
qq.dequeue();
qq.dequeue();
qq.dequeue();
qq.dequeue();