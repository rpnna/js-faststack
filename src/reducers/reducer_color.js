import { SWITCH_COLOR } from '../actions/actions_color';

const initialState = {
  colorCurrent: '#FFF',
  colorSwitched: false
};

export default function color(state = initialState, action) {
  switch (action.type) {
    case SWITCH_COLOR:
      return {
        ...state,
        colorCurrent: action.colorCurrent,
        colorSwitched: action.colorSwitched
      };
    default:
      return state;
  }
}
