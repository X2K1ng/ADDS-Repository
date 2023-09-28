#include <iostream>
#include <array>
#include <utility>

using namespace std;

int main(){
    array <int, 5> intArray1;
    array <int, 5> intArray2;
    intArray1 = {1,1,1,1,1};
    intArray2 = {2,2,2,2,2};
    cout << "Array 1: " << endl;
    for (int i = 0; i < 5; i++)
    {
        cout<<intArray1.at(i)<<" ";
    }
    cout << endl;
    cout << "Array 2: " << endl;
    for (int i = 0; i < 5; i++)
    {
        cout<<intArray2.at(i)<<" ";
    }
    cout << endl;
    swap(intArray1, intArray2);
    cout << "swapped successfully!\n" << endl;
    cout << "Array 1: " << endl;
    for (int i = 0; i < 5; i++)
    {
        cout<<intArray1.at(i)<<" ";
    }
    cout << endl;
    cout << "Array 2: " << endl;
    for (int i = 0; i < 5; i++)
    {
        cout<<intArray2.at(i)<<" ";
    }
    cout << endl;
    return 0;
}