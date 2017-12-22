const modulus = (function () {    
  const _state = {};    
  const retrieve = key => {
      return _state[key] ? _state[key] : console.error(`Cant find value for key ${key}`);
  };
  const store = (key, value) => {
      if (typeof key === 'function' && !value) {
        Object.assign(_state, {[key.name]: key});
        return;
      }        
      if (typeof key !== 'function' && !value) {
        console.error(`Key for value ${key} is required!`);
        return;
      }
      Object.assign(_state, {[key]: value});
      //console.log(_state);
  };  
  return {
    retrieve,
    store
  };
})();
