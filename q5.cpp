#include <iostream>
using namespace std;
class Rectangle
{
private:
    /* data */
public:
    Rectangle(/* args */);
    Rectangle(int,int);
    ~Rectangle();
    int length;
    int width;

};

Rectangle::Rectangle() : length(0), width(0){
}

Rectangle::Rectangle(int l,int w) : length(l), width(w){
}

Rectangle::~Rectangle()
{
}


int main(){
    Rectangle *rectPtr = nullptr;
    rectPtr = new Rectangle();
    rectPtr->length=5;
    rectPtr->width=23;
    cout << "length: " << rectPtr->length << ", width: " << rectPtr->width << endl;
    delete rectPtr;
    return 0;
}