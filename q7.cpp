#include <iostream>
#include <array>

using namespace std;

int main(){
    array <array <int, 3>, 3> birdyNest = {0};
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << birdyNest.at(i).at(j) << ", ";
        }
        cout << endl;
    }
    birdyNest.at(0).at(1) = 25;
    birdyNest.at(1).at(2) = 16;
    birdyNest.at(2).at(0) = 32;
    cout << endl;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << birdyNest.at(i).at(j) << ", ";
        }
        cout << endl;
    }
    
    return 0;
}