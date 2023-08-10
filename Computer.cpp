#include "Computer.h"

string Computer::getName()
{
    return "Computer";
}

Move* Computer::makeMove()
{
    return new Rock();
}

Computer::Computer() {}
