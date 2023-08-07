#include <string>
using namespace std;
class Move
{
private:
public:
    virtual bool beats(Move* opponentMove)=0;
    virtual string getName()=0;
};

class Rock: public Move
{
private:
public:
    bool beats(Move* opponentMove);
    string getName();
    Rock(/* args */);
    ~Rock();
};

class Paper: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Paper(/* args */);
    ~Paper();
};

class Scissors: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Scissors(/* args */);
    ~Scissors();
};

class Ninja: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Ninja(/* args */);
    ~Ninja();
};

class Robot: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Robot(/* args */);
    ~Robot();
};

class Monkey: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Monkey(/* args */);
    ~Monkey();
};

class Pirate: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Pirate(/* args */);
    ~Pirate();
};

class Zombie: public Move
{
private:
    /* data */
public:
    bool beats(Move* opponentMove);
    string getName();
    Zombie(/* args */);
    ~Zombie();
};
