export const isValidObjField = (userinfo) => {
    return Object.values(userinfo).every(value => value.trim());
}

export const updateError = (error, stateUpdater) =>{
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('');
    },2500);
}

export const isValidEmail = (value) => {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regx.test(value)
}
