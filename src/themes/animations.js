'use strict';

export default {
  drawer: () => ({
    enter: {
      animation: 'slideDown',
      duration: 300
    },
    leave: {
      animation: 'slideUp',
      duration: 300
    }
  })
};
