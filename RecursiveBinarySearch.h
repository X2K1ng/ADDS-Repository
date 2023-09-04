#ifndef RECURSIVEBINARYSEARCH_H
#define RECURSIVEBINARYSEARCH_H

#include <vector>

class RecursiveBinarySearch {
public:
    bool search(const std::vector<int>& list, int item);

private:
    bool binary_search(const std::vector<int>& list, int item, int low, int high);
};

#endif //RECURSIVEBINARYSEARCH_H
