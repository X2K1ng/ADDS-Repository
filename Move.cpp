#include "Move.h"

string Rock::getName()
{
    return "Rock";
}

bool Rock::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Scissors" || opponentName == "Zombie";
}

string Paper::getName()
{
    return "Paper";
}

bool Paper::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Robot" || opponentName == "Ninja";
}

string Scissors::getName()
{
    return "Scissors";
}

bool Scissors::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Pirate" || opponentName == "Zombie";
}

string Monkey::getName()
{
    return "Monkey";
}

bool Monkey::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Robot" || opponentName == "Ninja";
}

string Robot::getName()
{
    return "Robot";
}

bool Robot::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Zombie" || opponentName == "Ninja";
}

string Pirate::getName()
{
    return "Pirate";
}

bool Pirate::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Robot" || opponentName == "Ninja";
}

string Ninja::getName()
{
    return "Ninja";
}

bool Ninja::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Pirate" || opponentName == "Zombie";
}

string Zombie::getName()
{
    return "Zombie";
}

bool Zombie::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    return opponentName == "Pirate" || opponentName == "Monkey";
}