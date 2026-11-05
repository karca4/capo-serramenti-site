import type { IconBaseProps } from "react-icons";
import {
  LuBadgeCheck,
  LuCalculator,
  LuClock,
  LuHouse,
  LuLeaf,
  LuRuler,
  LuShieldCheck,
  LuSparkles,
  LuStore,
  LuWrench,
} from "react-icons/lu";
import type { FeatureIconName } from "../../config/types";

const icons = {
  ruler: LuRuler,
  badge: LuBadgeCheck,
  calculator: LuCalculator,
  store: LuStore,
  shield: LuShieldCheck,
  leaf: LuLeaf,
  home: LuHouse,
  wrench: LuWrench,
  clock: LuClock,
  sparkles: LuSparkles,
} as const;

export default function FeatureIcon({
  name,
  ...props
}: { name: FeatureIconName } & IconBaseProps) {
  const Icon = icons[name];
  return <Icon aria-hidden {...props} />;
}
