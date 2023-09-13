#ifndef REFEREE_H
#define REFEREE_H
#include "Player.h"
using namespace std;

class Referee
{
private:
    /* data */
public:
    Player * refGame(Player * player1, Player * player2); // returns the reference to the winning player
};
#endif