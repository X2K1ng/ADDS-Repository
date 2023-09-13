#ifndef HUMAN_H
#define HUMAN_H
#include "Player.h"
#include <string>
#include <iostream>
using namespace std;

class Human: public Player
{
private:
    string name = "Human";
public:
    Human(string n);
    string getName() override;
    char makeMove() override;
    ~Human();
};

#endif