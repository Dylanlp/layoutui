import {
  Achievement,
  Achievements,
  Metric,
  Stat,
} from "@/registry/new-york/ui/achievements"

export default function AchievementsDemo() {
  return (
    <Achievements>
      <Achievement>
        <Stat>10000</Stat>
        <Metric>Downloads</Metric>
      </Achievement>
      <Achievement>
        <Stat>1000</Stat>
        <Metric>Stars</Metric>
      </Achievement>
      <Achievement>
        <Stat>500</Stat>
        <Metric>Contributors</Metric>
      </Achievement>
    </Achievements>
  )
}
