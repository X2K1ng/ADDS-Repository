#ifndef PLAYER_H
#define PLAYER_H
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Player
{
public:
    virtual char makeMove() = 0;
    virtual string getName() = 0;
    Player();
    ~Player();
};

#endif