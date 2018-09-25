//
// Created by DELL on 2018/9/20.
//

#ifndef L2_UNION_FIND_H
#define L2_UNION_FIND_H

#include "dlist.h"

typedef struct GraphNode graphnode;
typedef struct Tree tree;

struct GraphNode {
    graphnode* parent;
    int ID;
    int rank;
    int distMST;
    sorted_dlist* neighbours;
    int isReached;
};

void generate_set(graphnode* x);

graphnode* find_root(graphnode* x);

void form_union(graphnode* x, graphnode* y);

#endif //L2_UNION_FIND_H
