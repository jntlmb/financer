import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function TotalBalance({ balance }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {balance ? ` $${balance}` : '$45,231.89'}
        </div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
