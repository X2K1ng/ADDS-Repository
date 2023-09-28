#include <iostream>
#include <array>
using namespace std;

int main(){
    array <double, 10> doubleArray = {1.81302981, 2.6846146854, 3.61846541, 4.8616461, 5.8455684, 6.654215151, 7.9515961, 8.68544565, 9.5321321, 10.985662632};
    cout << doubleArray.front() << " " << doubleArray.at(4) << " " << doubleArray.back() << endl;
}
    