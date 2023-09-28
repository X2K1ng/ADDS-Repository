#include <iostream>
#include <array>
#include <string>
using namespace std;

int main(){
    array <string, 5> stringArray;
    stringArray.fill("Empty Slot");
    cout << stringArray.size() << endl;
    for (int i = 0; i < 5; i++)
    {
        cout << stringArray.at(i) << ", ";
    }
    cout << endl;
    return 0;
}