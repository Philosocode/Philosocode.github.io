import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const ProcessTab = ({ currentTab, setCurrentTab, tabId, tabName }) => {
  const tabClasses = classNames({
    "c-process__tab": true,
    "is-current": tabId === currentTab
  });

  return (
    <button
      className={tabClasses}
      onClick={() => setCurrentTab(tabId)}
    >{tabName}</button>
  );
};

ProcessTab.propTypes = {
  currentTab: PropTypes.number.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
  tabId: PropTypes.number.isRequired,
  tabName: PropTypes.string.isRequired,
};

export default ProcessTab;