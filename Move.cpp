#include "Move.h"

string Rock::getName()
{
    return "Rock";
}

bool Rock::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Scissors" || opponentName == "Zombie")
    {
        return true;
    }
    else {
        return false;
    }
}

string Paper::getName()
{
    return "Paper";
}

bool Paper::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Robot" || opponentName == "Ninja")
    {
        return true;
    }
    else {
        return false;
    }
}

string Scissors::getName()
{
    return "Scissors";
}

bool Scissors::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Pirate" || opponentName == "Zombie")
    {
        return true;
    }
    else {
        return false;
    }
}

string Monkey::getName()
{
    return "Monkey";
}

bool Monkey::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Robot" || opponentName == "Ninja")
    {
        return true;
    }
    else {
        return false;
    }
}

string Robot::getName()
{
    return "Robot";
}

bool Robot::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Zombie" || opponentName == "Ninja")
    {
        return true;
    }
    else {
        return false;
    }
}

string Pirate::getName()
{
    return "Pirate";
}

bool Pirate::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Robot" || opponentName == "Ninja")
    {
        return true;
    }
    else {
        return false;
    }
}

string Ninja::getName()
{
    return "Ninja";
}

bool Ninja::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Pirate" || opponentName == "Zombie")
    {
        return true;
    }
    else {
        return false;
    }
}

string Zombie::getName()
{
    return "Zombie";
}

bool Zombie::beats(Move* opponentMove)
{
    string opponentName = opponentMove->getName();
    if (opponentName == "Pirate" || opponentName == "Monkey")
    {
        return true;
    }
    else {
        return false;
    }
}
Rock::Rock() {}

Rock::~Rock() {}

Paper::Paper() {}

Paper::~Paper() {}

Scissors::Scissors() {}

Scissors::~Scissors() {}

Monkey::Monkey() {}

Monkey::~Monkey() {}

Robot::Robot() {}

Robot::~Robot() {}

Pirate::Pirate() {}

Pirate::~Pirate() {}

Ninja::Ninja() {}

Ninja::~Ninja() {}

Zombie::Zombie() {}

Zombie::~Zombie() {}
