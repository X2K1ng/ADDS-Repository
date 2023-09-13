#include "Player.h"
#include "Computer.h"
#include <string>
using namespace std;

string Computer::getName() 
{
    return "Computer";
}

char Computer::makeMove()
{
    return 'R';
}
