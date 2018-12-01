function createNode(value){
    return{
        value,
        next:null
    }
}


function createLinkedList(){
    return{
        head:null,
        tail:null,
        length:0,
        push(value){
            let currentNode= createNode(value);

            if(this.head === null){
                this.head = currentNode;
                this.tail = currentNode;
                this.length++;
                return currentNode;
            }

            this.tail.next = currentNode;
            this.tail = currentNode;
            this.length++;

        },
        pop(){
            // No items
          if(this.isEmpty()){
              return null;
          }

          // 1 item
          const tail = this.tail;
          if(this.head === this.tail){
              this.head=null;
              this.tail=null;
              length--;
              return tail;
          }

          let currentHead = this.head;
          let penultimate;
          while(currentHead){
              if(currentHead.next === this.tail){
                  penultimate = currentHead;
                  break;
              }
            currentHead = currentHead.next;
          }

          penultimate.next = null;
          this.tail = penultimate;
          this.length --;
        },
        get(index){
            if(index < 0 && index > this.length){
                return null;
            }
            if(index === 0){
                return this.head;
            }
            let currentHead = this.head;
            let i=0;
            while(i<index){
                i++;
                currentHead=currentHead.next;
            }
            return currentHead;
        },
        delete(index){
            if(index < 0 && index > this.length){
                return null;
            }
            if(index === 0){
                this.head = this.head.next;
                this.length --;
                return this.head;
            }

            let currentHead = this.head;
            let previousBeforeHead;
            let i=0;
            while(i<index){
                i++;
                currentHead=currentHead.next;
                previousBeforeHead=currentHead;
            }
            const deleted=currentHead;
            previousBeforeHead.next=currentHead.next;
            currentHead.next = null;
            this.length --;
            return deleted;


        },

        isEmpty() {
            return this.length === 0;
        }
    }
}