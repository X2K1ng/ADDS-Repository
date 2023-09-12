#include <iostream>
using namespace std;
class Rectangle
{
private:
    /* data */
public:
    Rectangle(/* args */);
    ~Rectangle();
    int length;
    int width;

};

Rectangle::Rectangle() : length(0), width(0)
{
}

Rectangle::Rectangle(int l,int w) : length(l), width(w)
{
}

Rectangle::~Rectangle()
{
}


int main(){
    
    return 0;
}