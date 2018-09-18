//
// Created by 大泽 on 2018/9/18.
//

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define Hash_Val 11

typedef struct hash_node *hash_node_pt;

typedef struct hash_node {
    int val;
    hash_node_pt prev;
    hash_node_pt next;
};

typedef struct tb {
    struct hash_node *ARR[Hash_Val];
} hash_table;

void Insert_hash(int key) {
    struct hash_node *node_temp = (struct hash_node *) malloc(sizeof(struct hash_node));
    node_temp->val = key;
    node_temp->next = NULL;
    node_temp->prev = NULL;
    int val = key % Hash_Val;
    if (hash_table.ARR[val] == NULL) {
        hash_table.ARR[val] = node_temp;
    }
    else {
        hash_table.ARR[val]->next = node_temp;
        node_temp->prev = hash_table.ARR[val]->next;
        hash_table.ARR[val] = node_temp;
    }
}

struct hash_node *find(int key) {
    struct hash_node *node_temp;
    for (int i = 0; i < Hash_Val; i++) {
        node_temp = hash_table.ARR[i];
        while (node_temp != NULL) {
            if (node_temp->val == key) return node_temp;
            else node_temp = node_temp->prev;
        }
    }
}

void delete(int key) {
    int val = key % Hash_Val;
    struct hash_node *node_temp = find(key);
    if (node_temp->prev == NULL && node_temp->next == NULL) {
        free(node_temp);
        hash_table.ARR[val] = NULL;
    }
    else if (node_temp->prev == NULL && node_temp->next != NULL) {
        struct hash_node *node_temp2 = node_temp->next;
        node_temp2->prev = NULL;
        node_temp->next = NULL;
        free(node_temp);
    }
    else if (node_temp->prev != NULL && node_temp->next == NULL) {
        struct hash_node *node_temp2 = node_temp->prev;
        node_temp2->next = NULL;
        node_temp->prev = NULL;
        free(node_temp);
    }
    else {
        struct hash_node *node_temp2 = node_temp->next;
        struct hash_node *node_temp3 = node_temp->prev;
        node_temp2->prev = node_temp3;
        node_temp3->next = node_temp2;
        node_temp->next = NULL;
        node_temp->prev = NULL;
        free(node_temp);
    }
}

void Display() {
    struct hash_node *node_temp;
    for (int i = 0; i < Hash_Val; i++) {
        node_temp = hash_table.ARR[i];
        while (node_temp != NULL) {
            printf("%i", node_temp->val);
            node_temp = node_temp->prev;
        }
    }
}

int main() {
    printf("Please select a function: Ins, Fin, Del, Dsp, Ext");
    while (1) {
        char str[3];
        scanf("%3s", str);
        if (strcmp(str, "Ins") == 0) {
            printf("Please enter the number you want to insert:");
            int val;
            scanf("%i", &val);
            Insert_hash(val);
        }
        else if (strcmp(str, "Fin") == 0) {
            printf("Please enter the number you want to Search:");
            int val;
            find(val);
        }
        else if (strcmp(str, "Del") == 0) {
            printf("Please enter the number you want to Delete:");
            int val;
            scanf("%i", &val);
            delete(val);
        }
        else if (strcmp(str, "Dsp") == 0) {
            Display();
        }
        else if (strcmp(str, "Ext") == 0) {
            return 0;
        }
        else continue;
    }
}