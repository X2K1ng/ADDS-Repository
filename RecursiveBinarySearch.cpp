#include "RecursiveBinarySearch.h"

bool RecursiveBinarySearch::search(const std::vector<int>& list, int item) {
    return binary_search(list, item, 0, list.size() - 1);
}

bool RecursiveBinarySearch::binary_search(const std::vector<int>& list, int item, int low, int high) {
    if (low <= high) {
        int mid = (low + high) / 2;
        if (list[mid] == item) {
            return true;
        }
        if (list[mid] > item) {
            return binary_search(list, item, low, mid - 1);
        }
        return binary_search(list, item, mid + 1, high);
    }
    return false;
}
