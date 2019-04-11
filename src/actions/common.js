// Reusable function for dispatching actions
export const fireAction = (dispatch, type, payload) => {
    return dispatch({ type, payload });
};