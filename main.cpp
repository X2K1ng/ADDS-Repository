#include <iostream>
#include <sstream>
#include <vector>
#include "QuickSort.h"
#include "RecursiveBinarySearch.h"

int main() {
    // 1. Read the list of integers
    std::string line;
    std::getline(std::cin, line);
    std::istringstream iss(line);
    int num;
    std::vector<int> numbers;
    while (iss >> num) {
        numbers.push_back(num);
    }

    // 2. Sort the list using QuickSort
    QuickSort qsort;
    std::vector<int> sortedNumbers = qsort.sort(numbers);

    // 3. Check if 1 belongs to the list using RecursiveBinarySearch
    RecursiveBinarySearch rbs;
    bool found = rbs.search(sortedNumbers, 1);

    // 4. Print the results
    std::cout << (found ? "true" : "false");
    for (int n : sortedNumbers) {
        std::cout << " " << n;
    }
    std::cout << std::endl;

    return 0;
}
