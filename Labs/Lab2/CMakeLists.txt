cmake_minimum_required(VERSION 3.9)
project(Lab2)

set(CMAKE_CXX_STANDARD 11)

add_executable(Lab2 kruskal.c graph.h union_find.h union_find.c)