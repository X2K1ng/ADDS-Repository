#ifndef COMPUTER_H
#define COMPUTER_H
#include "Player.h"
#include <string>
using namespace std;

class Computer: public Player
{
public:
    string getName() override;
    char makeMove() override;
};

#endif