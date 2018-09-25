//
// Created by DELL on 2018/9/20.
//

#ifndef L2_DLIST_H
#define L2_DLIST_H

typedef struct DlistKeyValue dlistkeyvalue;
typedef struct Node dlistnode;
typedef struct Sorted_dlist sorted_dlist;

struct DlistKeyValue {
    int *key;
    void *value;
};

struct Node {
    dlistnode *prev;
    dlistnode *next;
    dlistkeyvalue *dt;
};

struct Sorted_dlist {
    dlistnode *head;
    dlistnode *tail;
    int size;
};

sorted_dlist *createlist();

dlistnode *dlist_search(sorted_dlist *list, int *key);

int dlist_insert(sorted_dlist *list, dlistkeyvalue *dt);

int dlist_delete(sorted_dlist *list, int *key);

void freelist(sorted_dlist *list);

#endif //L2_DLIST_H
