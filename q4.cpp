#include <iostream>
using namespace std;

int main(){
    int *ptr = new int;
    *ptr = 99;
    cout << *ptr << endl;
    delete ptr;
    return 0;
}