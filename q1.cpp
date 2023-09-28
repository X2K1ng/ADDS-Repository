#include <iostream>
#include <array>
using namespace std;

int main(){
    
    array<int, 5> intArray = {1,2,3,4,5};
    for (int i = 0; i < intArray.size(); i++)
    {
        cout << intArray.at(i) << " ";
    }
    cout << endl;
    return 0;
}