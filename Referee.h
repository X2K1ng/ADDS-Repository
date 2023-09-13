#ifndef REFEREE_H
#define REFEREE_H
#include "Player.h"

#include <iostream>
using namespace std;

class Referee
{
private:
    /* data */
public:
    Player * refGame(Player * player1, Player * player2); // returns the reference to the winning player
};

Player* Referee::refGame(Player * player1, Player * player2)
{
    char move1 = player1->makeMove();
    char move2 = player2->makeMove();

    if (move1==move2)
    {
        return nullptr;
    }
    
    if (
        (move1=='R'&&move2=='S')||
        (move1=='P'&&move2=='R')||
        (move1=='S'&&move2=='P')
       )
    {
        return player1;
    }
    else
    {
        return player2;
    }
}

#endif