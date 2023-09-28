#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

int main(){
    array <int, 10> intArray;
    intArray = {999, 206, 783, 982, 138, 256, 698, 652, 817, 316};
    for (int i = 0; i < intArray.size(); i++)
    {
        cout <<intArray.at(i) << ", ";
    }
    cout << endl;
    sort(intArray.begin(), intArray.end());
    for (int i = 0; i < intArray.size(); i++)
    {
        cout <<intArray.at(i) << ", ";
    }
    cout << endl;
    reverse(intArray.begin(), intArray.end());
    for (int i = 0; i < intArray.size(); i++)
    {
        cout <<intArray.at(i) << ", ";
    }
    
    return 0;
}