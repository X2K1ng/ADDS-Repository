#include "Player.h"

class Human: public Player
{
    Human();
    Human(string name_in);
    Move* makeMove();
    string getName();
};