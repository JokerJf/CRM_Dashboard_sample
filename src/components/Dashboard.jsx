import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const ticketsCreatedData = [
  { month: 'Jan', created: 20, solved: 18 },
  { month: 'Feb', created: 35, solved: 30 },
  { month: 'Mar', created: 30, solved: 32 },
  { month: 'Apr', created: 65, solved: 60 },
  { month: 'May', created: 55, solved: 52 },
  { month: 'Jun', created: 45, solved: 40 },
  { month: 'Jul', created: 50, solved: 48 },
];

const ticketTypesData = [
  { name: 'Sales', value: 44 },
  { name: 'Setup', value: 25 },
  { name: 'Bug', value: 12 },
  { name: 'Features', value: 19 },
];

const weekDaysData = [
  { day: 'Mon', tickets: 40 },
  { day: 'Tue', tickets: 35 },
  { day: 'Wed', tickets: 55 },
  { day: 'Thu', tickets: 25 },
  { day: 'Fri', tickets: 45 },
  { day: 'Sat', tickets: 60 },
  { day: 'Sun', tickets: 38 },
];

const Dashboard = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const pieColors = ['#8a2be2', '#ff6b9d', '#00d4ff', '#ffd700'];

  return (
    <main className="dashboard">
      <div className="dashboard-grid">
        <div className="metric-card avg-reply">
          <div className="metric-title">Avg First Reply Time</div>
          <div className="metric-value">
            <span>30<span className="small">h</span> 15<span className="small">min</span></span>
          </div>
        </div>

        <div className="metric-card avg-resolve">
          <div className="metric-title">Avg Full Resolve Time</div>
          <div className="metric-value">
            <span>22<span className="small">h</span> 40<span className="small">min</span></span>
          </div>
        </div>

        <div className="metric-card messages">
          <div className="metric-title">Messages</div>
          <div className="metric-value">-20%</div>
        </div>

        <div className="metric-card emails">
          <div className="metric-title">Emails</div>
          <div className="metric-value">+35%</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-block">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Tickets Created vs Tickets Solved</div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color solved"></div>
                  <span>Tickets Solved</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color created"></div>
                  <span>Tickets Created</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={ticketsCreatedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Legend wrapperStyle={{ color: '#9CA3AF' }} />
                <Line type="monotone" dataKey="solved" stroke="#00d4ff" strokeWidth={2} dot={{ fill: '#00d4ff' }} />
                <Line type="monotone" dataKey="created" stroke="#ff6b9d" strokeWidth={2} dot={{ fill: '#ff6b9d', r: 3 }} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">First Reply vs Full Resolve Time</div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={ticketsCreatedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Line type="monotone" dataKey="solved" stroke="#00d4ff" strokeWidth={2} dot={{ fill: '#00d4ff' }} />
                <Line type="monotone" dataKey="created" stroke="#8a2be2" strokeWidth={2} dot={{ fill: '#8a2be2', r: 3 }} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-footer">
              <div className="view-details">View full statement</div>
            </div>
          </div>
        </div>

        <div className="chart-block">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Tickets By Type</div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={ticketTypesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ticketTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px'}}
                  labelStyle={{ color: '#af9c9c' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-footer">
              <div className="legend-list">
                {ticketTypesData.map((entry, index) => (
                  <div key={`legend-${index}`} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">New Tickets vs Returned Tickets</div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={[{ name: 'New Tickets', value: 38 }, { name: 'Returned Tickets', value: 62 }]}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={50}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {[{ name: 'New Tickets', value: 38 }, { name: 'Returned Tickets', value: 62 }].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-footer">
              <div className="legend-list">
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: pieColors[0] }}></div>
                  <span>New Tickets</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: pieColors[1] }}></div>
                  <span>Returned Tickets</span>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Tickets By Type</div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={ticketTypesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ticketTypesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px'}}
                  labelStyle={{ color: '#af9c9c' }}
                  itemStyle={{ color: '#60a5fa' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-footer">
              <div className="legend-list">
                {ticketTypesData.map((entry, index) => (
                  <div key={`legend-${index}`} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="chart-block">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">Number of Tickets / Week Day</div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={weekDaysData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e1b2e', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#9CA3AF' }}
                />
                <Bar dataKey="tickets" fill="#00d4ff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;