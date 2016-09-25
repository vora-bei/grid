/**
 * Created by Никита on 20.09.2016.
 */
export const REQUEST_DATA = 'REQUEST_DATA';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const ADD_ROW = 'ADD_ROW';
export const CHANGE_COLUMN_ORDER = 'CHANGE_COLUMN_ORDER';
export function requestData() {
    return {
        columns: [
            {
                'name': 'title',
                'title': 'Имя',
                'sort': 1
            },
            {
                'name': 'age',
                'title': 'Возраст',
                'sort': -1
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
        data: [
            {'title': 'Ваня', 'descr': 'Молодец', more: 1, 'age': 12},
            {'title': 'Даша', 'descr': 'Молодец', more: 2, 'age': 21},
            {'title': 'Даша', 'descr': 'Молодец', more: 2, 'age': 22},
            {'title': 'Даша', 'descr': 'Молодец', more: 4, 'age': 23},
            {'title': 'Даша', 'descr': 'Молодец', more: 2, 'age': 24},
            {'title': 'Даша', 'descr': 'Молодец', more: 2, 'age': 25},
            {'title': 'Борис', 'descr': 'Молодец', more: 3, 'age': 21}
        ],
        type: 'REQUEST_DATA'
    };
};
export function changeDirection(key, direction) {
    return {
        key,
        direction,
        type: CHANGE_DIRECTION
    };
};
export function changeColumnOrder(key, direction) {
    return {
        key,
        direction,
        type: CHANGE_COLUMN_ORDER
    };
};
export function addRow(data) {
    return {
        data,
        type: ADD_ROW
    };
};