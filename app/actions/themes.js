const CHANGE_PRIMARY_COLOR = 'CHANGE_PRIMARY_COLOR';

const changePrimaryColor = color => ({
  type: CHANGE_PRIMARY_COLOR,
  color,
});

export { CHANGE_PRIMARY_COLOR, changePrimaryColor };
