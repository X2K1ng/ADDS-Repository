#ifndef PLAYER_H
#define PLAYER_H
using namespace std;
#include <iostream>
#include <string>
#include "Move.h"

class Player
{
    protected:
    string name;
    public:
    virtual Move* makeMove()=0;
    virtual string getName()=0;
};

#endif