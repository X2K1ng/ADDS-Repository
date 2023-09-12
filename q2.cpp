#include <iostream>
using namespace std;
int main() {
    int arr[5]={1,2,3,4,5};
    int *ptr;
    ptr = &arr[0];
    cout << *ptr << endl;
    ptr++;
    cout << *ptr << endl;
    return 0;
}