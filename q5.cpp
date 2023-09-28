#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

int main(){
    array <char, 26> charArray;
    charArray = {'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'};
    auto search = find(charArray.begin(), charArray.end(), 'e');

    cout << search << endl;
    return 0;
}