import { useEffect, useRef } from "react";
import "./Card.css";

export default function ({ children, className, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) {
      ref.current.classList.add(className);
    }    
  }, [])

  return (
    <div className={`card`} {...rest} ref={ref}>
      {children}
    </div>
  );
}
