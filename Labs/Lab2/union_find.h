//
// Created by 大泽 on 2018/9/20.
//

#ifndef LAB2_UNION_FIND_H
#define LAB2_UNION_FIND_H

typedef struct nd * nodeptr;
typedef struct nd {
    int val;
    nodeptr parent;
    int rank;
} node;

void getset(node *x);

node *find(node *x);

node *_union(node *x, node *y);

#endif //LAB2_UNION_FIND_H
