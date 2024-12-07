import { ReactNode } from "react";

interface Tchildren {
  children: ReactNode;
}
const CenterAlign = ({ children }: Tchildren) => {
  return <div className="max-w-[1400px]  w-full overflow-hidden mx-auto mb-6">{children}</div>;
};

export default CenterAlign;
