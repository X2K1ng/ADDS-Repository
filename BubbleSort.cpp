#include "BubbleSort.h"

std::vector<int> BubbleSort::sort(const std::vector<int>& list) {
    std::vector<int> sortedList = list;  // Make a copy so we don't modify the original list
    int n = sortedList.size();
    bool swapped;
    for (int i = 0; i < n-1; i++) {
        swapped = false;
        for (int j = 0; j < n-i-1; j++) {
            if (sortedList[j] > sortedList[j+1]) {
                std::swap(sortedList[j], sortedList[j+1]);
                swapped = true;
            }
        }
        if (!swapped)  // If no two elements were swapped by inner loop, the list is sorted
            break;
    }
    return sortedList;
}
