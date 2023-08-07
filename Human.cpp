#include "Human.h"

Move* Human::makeMove()
{
    string move;
    cout << "Enter move: ";
    cin >> move;
    if (move=="Rock")
    {
        return new Rock();
    }
    else if (move=="Scissors")
    {
        return new Scissors();
    }
    else if (move=="Paper")
    {
        return new Paper();
    }
    else if (move=="Monkey")
    {
        return new Monkey();
    }
    else if (move=="Robot")
    {
        return new Robot();
    }
    else if (move=="Ninja")
    {
        return new Ninja();
    }
    else if (move=="Pirate")
    {
        return new Pirate();
    }
    else if (move=="Zombie")
    {
        return new Zombie();
    }
    else {
        cerr << "Invalid Move!" << endl;
        return nullptr;
    }
};

string Human::getName()
{
    return name;
};

Human::Human()
{
    name = "Human";
};

Human::Human(string name_in)
{
    name = name_in;
};