#include <iostream>
#include "LinkedList.h"

LinkedList::LinkedList() {
	head = nullptr;
}

LinkedList::~LinkedList() {
	while (head != nullptr) {
		deleteFront();
	}
}

void LinkedList::insertFront(int item) {
	Node* newNode = new Node(item, head);
	head = newNode;
}

void LinkedList::deleteFront() {
	if(head != nullptr) {
		Node* oldHead = head;
		head = head->link;
		delete oldHead;
	}
}

void LinkedList::printList() {
	Node* currNode = head;
	while(currNode != nullptr) {
		std::cout << currNode->data << " ";
		currNode = currNode->link;
	}
}

/////////// your code goes here... DO NOT change the function signatures ///////////


bool LinkedList::swap(int pos1, int pos2) {
    if (pos1 == pos2) {
        return true;  // Swapping a position with itself; considered successful.
    }

    Node* curr = head;
    Node* prev1 = nullptr, * prev2 = nullptr;
    Node* node1 = nullptr, * node2 = nullptr;
    int count = 0;

    // Traverse the linked list to find the nodes and their previous nodes.
    while (curr != nullptr) {
        if (count == pos1) {
            node1 = curr;
        } else if (count == pos2) {
            node2 = curr;
        }

        if (node1 == nullptr) {
            prev1 = curr;
        }
        if (node2 == nullptr) {
            prev2 = curr;
        }

        if (node1 && node2) {
            break;
        }

        curr = curr->link;
        count++;
    }

    // Check if the positions are out-of-bounds.
    if (!node1 || !node2) {
        return false;
    }

    // If pos1 is not the first position, update the link of its previous node.
    if (prev1 != nullptr) {
        prev1->link = node2;
    } else {
        head = node2;
    }

    // If pos2 is not the first position, update the link of its previous node.
    if (prev2 != nullptr) {
        prev2->link = node1;
    } else {
        head = node1;
    }

    // Swap the next pointers of node1 and node2.
    Node* temp = node1->link;
    node1->link = node2->link;
    node2->link = temp;

    return true;
}



bool LinkedList::find_and_delete(int target) {
    Node* curr = head;
    Node* prev = nullptr;

    while (curr != nullptr) {
        if (curr->data == target) {
            // If the target node is the head.
            if (prev == nullptr) {
                head = curr->link;
            } else {
                prev->link = curr->link;
            }
            delete curr;
            return true;
        }
        prev = curr;
        curr = curr->link;
    }

    return false;  // Target not found.
}
