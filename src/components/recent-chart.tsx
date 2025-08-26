'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from './ui/chart';

import { Skeleton } from './ui/skeleton';

import { Monitor, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getItems } from '@/lib/items';

export default function RecentChart() {
  const { items, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      icon: Monitor,
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      icon: Smartphone,
      color: 'var(--chart-2)',
    },
  } satisfies ChartConfig;

  return (
    <section className="flex flex-col items-center">
      <h1 className="font-semibold text-xl self-start mb-4">Recent Activity</h1>

      {isLoading && (
        <Skeleton className="min-h-[200px] max-h-[350px] w-full max-w-[600px]" />
      )}

      {!isLoading && (
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] max-h-[350px] w-full max-w-[600px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      )}
    </section>
  );
}
