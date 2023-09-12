#include <iostream>
using namespace std;
void swap(int *ptr1,int *ptr2){
    int *arr[2] = {ptr1, ptr2};
    ptr1 = arr[1];
    ptr2 = arr[0];
}

int main() {
    int a = 1;
    int b = 99;
    cout << a << ", " << b << endl;
    swap(&a,&b);
    cout << a << ", " << b << endl;
    return 0;
}
// didn't work, gave the same result