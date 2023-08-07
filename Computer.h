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