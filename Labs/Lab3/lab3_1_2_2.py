import numpy as np
import pandas as pd


def GaleShapleyFunc(m, w):

    while (m.iloc[0]['isFree'] == 1):

        man_index = list(m.index)
        tmp_man_index = int(man_index[0])
        prop_index = int(m.iloc[0]['proposed'])
        tmp_woman_index = int(m.iloc[0, prop_index])
        m.loc[tmp_man_index, 'proposed'] = prop_index + 1
        if (w.loc[tmp_woman_index]['isFree'] == 1):
            m.loc[tmp_man_index, 'pair'] = tmp_woman_index
            w.loc[tmp_woman_index, 'pair'] = tmp_man_index
            m.loc[tmp_man_index, 'isFree'] = 0
            w.loc[tmp_woman_index, 'isFree'] = 0
        else:
            tmp_date_man_index = w.loc[tmp_woman_index]['pair']
            w_man_list = list(w.loc[tmp_woman_index][0:m.index.size])
            # print(w_man_list.index(tmp_date_man_index))
            # print(w_man_list.index(tmp_man_index))
            if (w_man_list.index(tmp_date_man_index) < w_man_list.index(tmp_man_index)):
                continue
            else:
                m.loc[tmp_man_index, 'pair'] = tmp_woman_index
                w.loc[tmp_woman_index, 'pair'] = tmp_man_index
                m.loc[tmp_man_index, 'isFree'] = 0
                m.loc[tmp_date_man_index, 'isFree'] = 1
                m.loc[tmp_date_man_index, 'pair'] = np.nan

        m = m.sort_values(by='isFree', axis=0, ascending=False)

    print(m)
    print(w)
    return m['pair']


m = pd.DataFrame([[0, 1, 2, 3], [0, 3, 2, 1], [0, 2, 3, 1], [0, 2, 1, 3]])
w = pd.DataFrame([[2, 1, 0, 3], [3, 0, 1, 2], [2, 3, 0, 1], [0, 1, 2, 3]])

m['isFree'] = 1
w['isFree'] = 1
m['proposed'] = 0
w['proposed'] = 0
m['pair'] = np.nan
w['pair'] = np.nan

pairs = GaleShapleyFunc(m, w)

print(pairs)
