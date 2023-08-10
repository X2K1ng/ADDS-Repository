#ifndef HUMAN_H
#define HUMAN_H
#include "Player.h"
#include "Move.h"
#include <string>

class Human: public Player
{
    private:
    string name;
    public:
    Human();
    Human(string name_in);
    Move* makeMove();
    string getName();
};
#endif