import * as React from "react"
import PageLayout from "../components/layouts/video-production/page-layout/page-layout"
import { Statistic, CalculatePrice, Team } from "../components/sections/video-production";

export default function IndexPage() {
  return (
    <PageLayout>
      <Statistic />
      <CalculatePrice />
      <Team />
    </PageLayout>
  )
}
