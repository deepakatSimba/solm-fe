// @ts-nocheck

import { ResponsivePie } from "@nivo/pie";

export const ActivitesChart = ({ data }: any) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-22}
    innerRadius={0.5}
    padAngle={3}
    cornerRadius={15}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "category10" }}
    borderColor={{
      from: "color",
      modifiers: [["darker", "0.1"]],
    }}
    arcLinkLabelsSkipAngle={11}
    arcLinkLabelsTextOffset={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsDiagonalLength={36}
    arcLinkLabelsStraightLength={30}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    enableArcLabels={false}
    arcLabelsSkipAngle={11}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", "1.9"]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
    //   {
    //     match: {
    //       id: "python",
    //     },
    //     id: "dots",
    //   },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
    //   {
    //     match: {
    //       id: "lisp",
    //     },
    //     id: "lines",
    //   },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
    //   {
    //     match: {
    //       id: "javascript",
    //     },
    //     id: "lines",
    //   },
    ]}
    legends={[]}
  />
);
