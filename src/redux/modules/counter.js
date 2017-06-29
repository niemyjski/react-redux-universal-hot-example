import { ExceptionlessClient } from 'exceptionless';
const exceptionlessClient = ExceptionlessClient.default;

const INCREMENT = 'redux-example/counter/INCREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const {count} = state;
      exceptionlessClient.createFeatureUsage('Increment').setValue(count + 1).setProperty('state', state).submit();
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}
