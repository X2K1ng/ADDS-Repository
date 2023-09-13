#ifndef COMPUTER_H
#define COMPUTER_H
#include "Player.h"
#include <string>

class Computer: public Player
{
public:
    string getName() override;
    char makeMove() override;
};

string Computer::getName() 
{
    return "Computer";
}

char Computer::makeMove()
{
    return 'R';
}

#endif