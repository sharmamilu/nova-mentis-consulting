import { useEffect, useRef } from "react";
import { SERVICE_TABS } from "../../data/servicesData";

const ServiceTabs = ({ activeTab, onTabChange }) => {
  const containerRef = useRef();

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector(".tab-btn.active");
    if (!activeEl) return;

    containerRef.current.style.setProperty(
      "--active-left",
      `${activeEl.offsetLeft}px`,
    );

    containerRef.current.style.setProperty(
      "--active-width",
      `${activeEl.offsetWidth}px`,
    );
  }, [activeTab]);

  return (
    <div className="tabs-container">
      <div className="tabs-inner" ref={containerRef}>
        {SERVICE_TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? " active" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
