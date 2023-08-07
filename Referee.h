#ifndef REFEREE_H
#define REFEREE_H
#include "Player.h"
class Referee
{
private:
public:
    Player* judgeWinner(Player* player1, Player* player2);
};
#endif