const initialization = {
  activeTab: 'HOME'
}
const Tab = (state = initialization, action) => {

  if (action.type == "SWITCHTAB") {
    state = Object.assign({}, state, {
      actionTab: action.tab
    })
  }
  return state;
}

export default Tab