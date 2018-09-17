#include<stdlib.h>
#include<string.h>
#include<stdio.h>

#define MAX 12

/*
 * Suppose our Hash table only takes integers and
 * Suppose our Hash rule is given as:
 * F(x) = x % MAX, here MAX is predefined.
 */

typedef struct hash_node {
    char *key;
    int val;
    struct hash_node *next_hash_node;
};

struct hash_node *Hash_table[MAX]; // Array of Pointers

void insert_hash(int val) {
    int id = val % MAX;
    struct hash_node *hash_entry;
    struct hash_node **hash_key;

    for (hash_key = &Hash_table[id]; *hash_key; hash_key = &(*hash_key)->next_hash_node) {
        if ((*hash_key)->val > val) break;
    } // Put at the correct Position

    hash_entry = (struct hash_node *) malloc(sizeof(struct hash_node));
    hash_entry->val = val;
    hash_entry->next_hash_node = *hash_key;
    *hash_key = hash_entry;
}

int find(int val) {
    int id = val % MAX;
    struct hash_node *hash_entry;
    struct hash_node **hash_key;
    int flag = 0;
    for (hash_key = &Hash_table[id]; *hash_key; hash_key = &(*hash_key)->next_hash_node) {
        if ((*hash_key)->val == val) {
            printf("Found it!");
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        printf("Not found. Sigh");
    }
}

void delete(int val) {
    int id = val % MAX;
    struct hash_node *hash_entry;
    struct hash_node **hash_key;
    int flag = 0;
    int pos = 0;
    for (hash_key = &Hash_table[id]; *hash_key; hash_key = &(*hash_key)->next_hash_node) {
        if ((*hash_key)->val == val) break;
        else ++pos;
    }
    if (pos == 0) {
        struct hash_node *temp1 = *hash_key;
        hash_entry = temp1->next_hash_node;
        free(temp1);
    }
    else {
        for (hash_key = &Hash_table[id]; *hash_key; hash_key = &(*hash_key)->next_hash_node) {
            if ((*hash_key)->next_hash_node->val == val) break;
            else ++pos;
        }
        struct hash_node *temp1 = *hash_key;
        struct hash_node *temp2 = (*hash_key)->next_hash_node;
        struct hash_node *temp3 = (*hash_key)->next_hash_node->next_hash_node;
        temp1->next_hash_node = temp3;
        free(temp2);
    }
}
