#include "LinkedList.h"
#include <iostream>

// Default constructor
LinkedList::LinkedList() : head(nullptr) {}

// Constructor that initializes the list with a C-array
LinkedList::LinkedList(int* array, int len) : head(nullptr) {
    for (int i = 0; i < len; ++i) {
        insertPosition(i+1, array[i]);
    }
}

// Destructor to free up the memory
LinkedList::~LinkedList() {
    Node* temp;
    while (head) {
        temp = head;
        head = head->getLink();
        delete temp;
    }
}

// Insert a new node at a specific position
void LinkedList::insertPosition(int pos, int newNum) {
    Node* newNode = new Node(newNum);
    if (!head || pos <= 1) {
        newNode->setLink(head);
        head = newNode;
        return;
    }
    
    Node* prev = nullptr;
    Node* curr = head;
    int count = 1;
    while (curr && count < pos) {
        prev = curr;
        curr = curr->getLink();
        count++;
    }
    newNode->setLink(curr);
    prev->setLink(newNode);
}

// Print the list (for debugging purposes)
void LinkedList::printList() const {
    Node* temp = head;
    std::cout << "[";
    while (temp) {
        std::cout << temp->getData();
        temp = temp->getLink();
        if (temp) std::cout << " ";
    }
    std::cout << "]" << std::endl;
}

bool LinkedList::deletePosition(int pos) {
    if (!head) return false;  // List is empty

    if (pos == 1) {
        Node* toDelete = head;
        head = head->getLink();
        delete toDelete;
        return true;
    }

    Node* prev = nullptr;
    Node* curr = head;
    int count = 1;
    while (curr && count < pos) {
        prev = curr;
        curr = curr->getLink();
        count++;
    }

    if (!curr) return false;  // Position out-of-bounds

    prev->setLink(curr->getLink());
    delete curr;
    return true;
}

// Get the data of the node at a specific position
int LinkedList::get(int pos) const {
    Node* curr = head;
    int count = 1;
    while (curr && count < pos) {
        curr = curr->getLink();
        count++;
    }
    if (!curr) return std::numeric_limits<int>::max();
    return curr->getData();
}

// Search for a target value and return its position
int LinkedList::search(int target) const {
    Node* curr = head;
    int pos = 1;
    while (curr) {
        if (curr->getData() == target) return pos;
        curr = curr->getLink();
        pos++;
    }
    return -1;  // Target not found in the list
}
