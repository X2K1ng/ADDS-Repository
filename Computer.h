#ifndef COMPUTER_H
#define COMPUTER_H
#include "Player.h"
class Computer: public Player
{
private:
    /* data */
public:
    Move* makeMove();
    string getName();
    Computer();
    ~Computer();
};
#endif