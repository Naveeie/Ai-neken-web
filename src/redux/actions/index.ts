import * as reducer from '../reducer/helper';

export const updateCommand = (command: string) => ({
    payload: command,
    type: reducer.GET_COMMAND,
});
