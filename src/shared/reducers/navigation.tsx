
export default (state = {}, action) => {
    switch (action.type) {
        case 'SETTINGS_CHANGE':
            return action.payload;
        default:
            return state;
    }
}

export const getDownloadLocation = (state) => state.downloadLocation;