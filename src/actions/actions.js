

module.exports = {
  saveFacebookCredentials: (credentials) => {
    return { type: 'SAVE_FACEBOOK_CREDENTIALS', credentials };
  },
  saveAge: (age) => {
    return { type: 'SAVE_AGE', age };
  },
  saveZipCode: (zipCode) => {
    return { type: 'SAVE_ZIP_CODE', zipCode };
  },
  setCurrentPage: (currentPage) => {
    return { type: 'SET_CURRENT_PAGE', currentPage };
  },
  setCurrentMessageId: (facebookId) => {
    return { type: 'SET_CURRENT_MESSAGE_ID', facebookId };
  },
  saveUsers: (users) => {
    return { type: 'SAVE_USERS', users };
  },
  setAuth: (auth) => {
    return { type: 'SET_AUTH', auth };
  },
  incrementUsers: () => {
    return { type: 'INCREMENT_USERS' };
  },
};
