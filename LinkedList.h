#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include "Node.h"
#include <limits>
#include <iostream>

class LinkedList {
private:
    Node* head;

public:
    // Constructors & Destructor
    LinkedList();
    LinkedList(int* array, int len);
    ~LinkedList();

    // Member functions
    void insertPosition(int pos, int newNum);
    bool deletePosition(int pos);
    int get(int pos) const;
    int search(int target) const;
    void printList() const;
};

#endif // LINKEDLIST_H
