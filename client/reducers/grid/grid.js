/**
 * Created by Никита on 20.09.2016.
 */
import {REQUEST_DATA, CHANGE_DIRECTION, CHANGE_COLUMN_ORDER, ADD_ROW} from 'grid.js';

export const initialState = Immutable.fromJS({
    columns: [
        {
            'name': 'title',
            'title': 'Имя',
            'sort': 1
        },
        {
            'name': 'descr',
            'title': 'Описание',
            'sort': 0
        },
        {
            'name': 'more',
            'title': 'Больше',
            'sort': -1
        }
    ],
    data: [{'title': 1, 'desr': 2}, {'title': 1, 'desr': 2}, {'title': 1, 'desr': 2}]
});

export const gridsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (REQUEST_DATA):
            return state.set('columns', Immutable.fromJS(action.columns))
                .set('data', Immutable.fromJS(action.data))
        case (CHANGE_DIRECTION):
            return state.set('columns', state.get('columns').map((column)=>
                column.get('name') == action.key ? column.set('sort', action.direction) : column
            ));
        case (ADD_ROW):
            return state.set('data', state.get('data').push(Immutable.Map(action.data)));
        case (CHANGE_COLUMN_ORDER):
            let columns = state.get('columns'),
                index = columns.findIndex((column) =>column.get('name') == action.key),
                newIndex = action.direction + index,
                column = columns.get(index);
            columns = columns.remove(index)
            columns = columns.insert(newIndex, column)
            return state.set('columns', columns);
        default:
            return state;
    }
};
