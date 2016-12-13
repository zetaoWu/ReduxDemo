/**
 * Created by poype on 16/8/25.
 */


export function add(data) {
    return {
        type: 'ADD',
        data: data
    };
}

export function sub(data) {
    return {
        type: 'SUB',
        data: data
    }
}