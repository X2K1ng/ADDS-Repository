#include "QuickSort.h"

std::vector<int> QuickSort::sort(const std::vector<int>& list) {
    std::vector<int> sortedList = list;  // Make a copy so we don't modify the original list
    quicksort(sortedList, 0, sortedList.size()-1);
    return sortedList;
}

void QuickSort::quicksort(std::vector<int>& list, int low, int high) {
    if (low < high) {
        int pi = partition(list, low, high);  // pi is partitioning index
        quicksort(list, low, pi - 1);         // Before pi
        quicksort(list, pi + 1, high);        // After pi
    }
}

int QuickSort::partition(std::vector<int>& list, int low, int high) {
    // Select pivot. If list has at least 3 elements, choose the third. Otherwise, choose the first.
    int pivotIndex = (high - low + 1 >= 3) ? low + 2 : low;
    int pivot = list[pivotIndex];
    std::swap(list[pivotIndex], list[high]);  // Move pivot element to end
    int i = low - 1;
    for (int j = low; j <= high-1; j++) {
        if (list[j] < pivot) {
            i++;
            std::swap(list[i], list[j]);
        }
    }
    std::swap(list[i + 1], list[high]);
    return i + 1;
}
