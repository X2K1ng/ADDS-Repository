#include "Human.h"
#include "Computer.h"
#include "Referee.h"
#include <iostream>

int main() {
    // Create the players and referee
    Human humanPlayer;
    Computer computerPlayer;
    Referee referee;

    // Play the game and get the result
    Player* winner = referee.judgeWinner(&humanPlayer, &computerPlayer);

    // Print the result
    if (winner == nullptr) {
        std::cout << "It's a Tie." << std::endl;
    } else {
        std::cout << winner->getName() << " Wins." << std::endl;
    }

    return 0;
}
