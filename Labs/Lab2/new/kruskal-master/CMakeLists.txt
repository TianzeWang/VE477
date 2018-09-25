cmake_minimum_required(VERSION 3.9)
project(kruskal_master)

set(CMAKE_CXX_STANDARD 11)

add_executable(kruskal_master randmst.c functions.h new_main.c)