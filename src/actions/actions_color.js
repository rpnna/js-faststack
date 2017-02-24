export const SWITCH_COLOR = 'SWITCH_COLOR';

export function switchColorAction(currentColor, toggle) {
  return {
    type: SWITCH_COLOR,
    colorCurrent: currentColor,
    colorSwitched: toggle
  };
}
