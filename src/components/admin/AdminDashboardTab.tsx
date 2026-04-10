import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { CalendarDays, TrendingUp, UserPlus } from 'lucide-react';

type Period = 'day' | 'week' | 'month';

interface Props {
  users: { created_at: string }[];
  language: string;
}

const AdminDashboardTab = ({ users, language }: Props) => {
  const [period, setPeriod] = useState<Period>('day');
  const pt = language === 'pt';

  const chartData = useMemo(() => {
    const now = new Date();
    const grouped: Record<string, number> = {};

    if (period === 'day') {
      // Last 30 days
      for (let i = 29; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        grouped[key] = 0;
      }
      users.forEach(u => {
        const key = u.created_at.slice(0, 10);
        if (key in grouped) grouped[key]++;
      });
    } else if (period === 'week') {
      // Last 12 weeks
      for (let i = 11; i >= 0; i--) {
        const start = new Date(now);
        start.setDate(start.getDate() - i * 7 - start.getDay());
        const key = start.toISOString().slice(0, 10);
        grouped[key] = 0;
      }
      users.forEach(u => {
        const d = new Date(u.created_at);
        const weekStart = new Date(d);
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const key = weekStart.toISOString().slice(0, 10);
        if (key in grouped) grouped[key]++;
      });
    } else {
      // Last 12 months
      for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = d.toISOString().slice(0, 7);
        grouped[key] = 0;
      }
      users.forEach(u => {
        const key = u.created_at.slice(0, 7);
        if (key in grouped) grouped[key]++;
      });
    }

    return Object.entries(grouped).map(([label, count]) => {
      let displayLabel = label;
      if (period === 'day') {
        displayLabel = new Date(label + 'T12:00:00').toLocaleDateString(pt ? 'pt-BR' : 'en-US', { day: '2-digit', month: '2-digit' });
      } else if (period === 'week') {
        displayLabel = `${pt ? 'Sem' : 'Wk'} ${new Date(label + 'T12:00:00').toLocaleDateString(pt ? 'pt-BR' : 'en-US', { day: '2-digit', month: '2-digit' })}`;
      } else {
        displayLabel = new Date(label + '-15').toLocaleDateString(pt ? 'pt-BR' : 'en-US', { month: 'short', year: '2-digit' });
      }
      return { label: displayLabel, count };
    });
  }, [users, period, language]);

  const totals = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today); weekAgo.setDate(weekAgo.getDate() - 7);
    const monthAgo = new Date(today); monthAgo.setMonth(monthAgo.getMonth() - 1);

    return {
      today: users.filter(u => new Date(u.created_at) >= today).length,
      week: users.filter(u => new Date(u.created_at) >= weekAgo).length,
      month: users.filter(u => new Date(u.created_at) >= monthAgo).length,
    };
  }, [users]);

  const periodLabels: Record<Period, string> = {
    day: pt ? 'Diário' : 'Daily',
    week: pt ? 'Semanal' : 'Weekly',
    month: pt ? 'Mensal' : 'Monthly',
  };

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10"><UserPlus className="h-5 w-5 text-primary" /></div>
            <div>
              <p className="text-2xl font-bold text-white">{totals.today}</p>
              <p className="text-xs text-muted-foreground">{pt ? 'Hoje' : 'Today'}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-green-500/10"><CalendarDays className="h-5 w-5 text-green-500" /></div>
            <div>
              <p className="text-2xl font-bold text-white">{totals.week}</p>
              <p className="text-xs text-muted-foreground">{pt ? 'Últimos 7 dias' : 'Last 7 days'}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-card/50">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/10"><TrendingUp className="h-5 w-5 text-blue-500" /></div>
            <div>
              <p className="text-2xl font-bold text-white">{totals.month}</p>
              <p className="text-xs text-muted-foreground">{pt ? 'Últimos 30 dias' : 'Last 30 days'}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="border-primary/20 bg-card/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">{pt ? 'Novos Cadastros' : 'New Signups'}</CardTitle>
          <div className="flex gap-1">
            {(['day', 'week', 'month'] as Period[]).map(p => (
              <Button
                key={p}
                size="sm"
                variant={period === p ? 'default' : 'outline'}
                onClick={() => setPeriod(p)}
                className="text-xs h-7 px-3"
              >
                {periodLabels[p]}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                  interval={period === 'day' ? 4 : 0}
                  angle={period === 'day' ? -45 : 0}
                  textAnchor={period === 'day' ? 'end' : 'middle'}
                  height={period === 'day' ? 50 : 30}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))',
                  }}
                  labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
                  formatter={(value: number) => [value, pt ? 'Cadastros' : 'Signups']}
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardTab;
