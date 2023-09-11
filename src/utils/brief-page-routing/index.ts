import { BriefingRoutesType } from '@/constants';

export function getBriefingFormStepHref<T extends BriefingRoutesType | undefined>(
  step?: T
): T extends string ? string : undefined {
  if (!step) return undefined as any;
  return `/briefing/${step === 'index' ? '' : step}` as any;
}
