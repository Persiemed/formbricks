import { useMemo } from "react";

import { cn } from "@formbricks/lib/cn";
import { TCardArrangementOptions } from "@formbricks/types/styling";

import { Button } from "../Button";

type CardArrangementProps = {
  surveyType: "link" | "web";
  activeCardArrangement: TCardArrangementOptions;
  setActiveCardArrangement: (arrangement: TCardArrangementOptions) => void;
};

const CardArrangement = ({
  activeCardArrangement,
  surveyType,
  setActiveCardArrangement,
}: CardArrangementProps) => {
  const surveyTypeDerived = useMemo(() => {
    return surveyType == "link" ? "Link" : "In App";
  }, [surveyType]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-slate-900">
          Card Arrangement for {surveyTypeDerived} Surveys
        </h3>
        <p className="text-sm text-slate-800">
          How funky do you want your cards in {surveyTypeDerived} Surveys
        </p>
      </div>

      <div className="flex gap-2 rounded-md border border-slate-300 bg-white p-1">
        <Button
          variant="minimal"
          size="sm"
          className={cn(
            "flex flex-1 justify-center bg-white text-center",
            activeCardArrangement === "casual" && "bg-slate-200"
          )}
          onClick={() => setActiveCardArrangement("casual")}>
          Casual
        </Button>

        <Button
          variant="minimal"
          size="sm"
          onClick={() => setActiveCardArrangement("straight")}
          className={cn(
            "flex flex-1 justify-center bg-white text-center",
            activeCardArrangement === "straight" && "bg-slate-200"
          )}>
          Straight
        </Button>

        <Button
          variant="minimal"
          size="sm"
          onClick={() => setActiveCardArrangement("simple")}
          className={cn(
            "flex flex-1 justify-center bg-white text-center",
            activeCardArrangement === "simple" && "bg-slate-200"
          )}>
          Simple
        </Button>
      </div>
    </div>
  );
};

export default CardArrangement;
