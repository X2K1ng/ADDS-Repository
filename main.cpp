#include <iostream>
#include "Player.h"
#include "Human.h"
#include "Computer.h"
#include "Referee.h"

int main() {
    std::cout << "Welcome to the Monkey-Robot-Pirate-Ninja-Zombie game!" << std::endl;
    
    Human humanPlayer("Ash");
    Computer computerPlayer;
    
    Referee referee;
    
    for (int i = 0; i < 3; ++i) {
        std::cout << "Round " << i+1 << std::endl;
        
        Player* winner = referee.refGame(&humanPlayer, &computerPlayer);
        
        if (winner == nullptr) {
            std::cout << "It's a Tie." << std::endl;
        } else {
            std::cout << winner->getName() << " Wins." << std::endl;
        }
    }

    return 0;
}