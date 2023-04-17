import { useEffect, useRef, type HTMLProps } from "react";
import clsx from "clsx";

import Tick from "../../public/icons/Tick.svg";

export function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <label className="relative flex h-[21px] cursor-pointer items-center">
      <input
        type="checkbox"
        className={clsx(
          "h-[21px] w-[21px] rotate-45 appearance-none rounded-lg border",
          "border-gray-dark bg-dark-secondary accent-primary duration-200",
          rest.checked && " !bg-primary !border-0",
          className,
        )}
        ref={ref}
        {...rest}
      />
      <div
        className={clsx(
          "invisible absolute left-1/2 top-3 box-content -translate-x-1/2 -translate-y-1/2 transform",
          rest.checked && "!visible",
        )}
      >
        <Tick />
      </div>
    </label>
  );
}
