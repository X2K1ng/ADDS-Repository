#include "BigNumCalc.h"

// Convert string to list representation
std::list<int> bigNumCalc::buildBigNum(const std::string& numString) {
    std::list<int> result;
    for (char digit : numString) {
        result.push_back(digit - '0');
    }
    return result;
}

// Add two big numbers
std::list<int> bigNumCalc::add(const std::list<int>& num1, const std::list<int>& num2) {
    std::list<int> result;
    // ... [implementation]
    return result;
}

// Subtract two big numbers
std::list<int> bigNumCalc::sub(const std::list<int>& num1, const std::list<int>& num2) {
    std::list<int> result;
    // ... [implementation]
    return result;
}

// Multiply two big numbers (assuming num2 is 1-digit)
std::list<int> bigNumCalc::mul(const std::list<int>& num1, const std::list<int>& num2) {
    std::list<int> result;
    // ... [implementation]
    return result;
}
