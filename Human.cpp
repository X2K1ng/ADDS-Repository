#include "Player.h"
#include "Human.h"
#include <string>
#include <iostream>
using namespace std;

string Human::getName()
{
    return name;
}

char Human::makeMove()
{
    char move = NULL;
    cout<<"Enter move: ";
    cin >> move;
    return move;
}

Human::Human(string n): name(n) {}
Human::Human()
{}
Human::~Human()
{
}