'use strict';

//traverse a linked list data structure and return the last object in the list

function tail(o) {
    for (; o.next; o = o.next){
        return o;
    }
}