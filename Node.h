#ifndef NODE_H
#define NODE_H

class Node {
private:
    int data;
    Node* link;

public:
    // Constructor
    Node(int value);

    // Getter and Setter for data
    int getData() const;
    void setData(int value);

    // Getter and Setter for link
    Node* getLink() const;
    void setLink(Node* nextLink);
};

#endif // NODE_H
