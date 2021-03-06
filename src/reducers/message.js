
// const initialState = {
//   userId: null,
//   email: null,
//   firstName: null,
//   lastName: null,
//   age: null
// };
const initialState = {
  toUserId: 2,
  facebookId: 'b1020642324234696',
  firstName: 'Blake',
  lastName: 'Lively',
  picturePath: 'http://hbz.h-cdn.co/assets/cm/14/52/54988f0f50262_-_hbz-blake-lively-style-alert-promo-xln.jpg',
};

export default function message (state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_MESSAGE_ID':
      var newState = {};
      newState.toUserId = action.toUserData.toUserId;
      newState.facebookId = action.toUserData.facebookId;
      newState.firstName = action.toUserData.firstName;
      newState.lastName = action.toUserData.lastName;
      newState.picturePath = action.toUserData.picturePath;
      return newState;
    default:
      return state;
  }
};
