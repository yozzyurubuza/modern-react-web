import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Enable ctrl + click to open link in new tab
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, "", href);

    //Communicate to route event change
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      children={children}
    ></a>
  );
};

export default Link;
