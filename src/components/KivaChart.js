import React, { Component } from 'react'
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  Legend
} from 'recharts'

class KivaChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repaymentData: []
    }
  }
  render() {
    if (this.props.id === 'Payment Chart') {
      this.state.repaymentData = []
      for (let i = 0; i < this.props.data[0].length; i++) {
        this.state.repaymentData[i] = {
          periodNum: i,
          principal: this.props.data[4][i],
          interest: this.props.data[6][i],
          taxes: this.props.data[7][i],
          insurance: this.props.data[8][i],
          fees: this.props.data[9][i],
          security_deposit: this.props.data[10][i]
        }
      }
      if (this.props.visualType === 'Bar') {
        return (
          <BarChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="periodNum" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="principal" stackId="a" fill="#c94473" />
            <Bar dataKey="interest" stackId="a" fill="#B977D7" />
            <Bar dataKey="taxes" stackId="a" fill="#95c5dd" />
            <Bar dataKey="insurance" stackId="a" fill="#34bf60" />
            <Bar dataKey="fees" stackId="a" fill="#bfa434" />
            <Bar dataKey="security_deposit" stackId="a" fill="#7EBC89" />
          </BarChart>
        )
      }
      if (this.props.visualType === 'Line') {
        return (
          <LineChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="periodNum" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="principal" stroke="#c94473" />
            <Line
              type="monotone"
              dataKey="interest"
              stroke="#B977D7"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="taxes"
              stroke="#95c5dd"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="insurance" stroke="#34bf60" />
            <Line
              type="monotone"
              dataKey="fees"
              stroke="#bfa434"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="security_deposit" stroke="#7EBC89" />
          </LineChart>
        )
      }
      if (this.props.visualType === 'Area') {
        return (
          <AreaChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodNum" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="principal"
              stackId="1"
              stroke="#c94473"
              fill="#c94473"
            />
            <Area
              type="monotone"
              dataKey="interest"
              stackId="1"
              stroke="#B977D7"
              fill="#B977D7"
            />
            <Area
              type="monotone"
              dataKey="taxes"
              stackId="1"
              stroke="#95c5dd"
              fill="#95c5dd"
            />
            <Area
              type="monotone"
              dataKey="insurance"
              stackId="1"
              stroke="#34bf60"
              fill="#34bf60"
            />
            <Area
              type="monotone"
              dataKey="fees"
              stackId="1"
              stroke="#bfa434"
              fill="#bfa434"
            />
            <Area
              type="monotone"
              dataKey="security_deposit"
              stackId="1"
              stroke="#7EBC89"
              fill="#7EBC89"
            />
          </AreaChart>
        )
      }
    } else if (this.props.id === 'Balance Chart') {
      this.state.repaymentData = []
      for (let i = 0; i < this.props.data[0].length; i++) {
        this.state.repaymentData[i] = {
          periodNum: i,
          balance: this.props.data[5][i]
        }
      }
      if (this.props.visualType === 'Bar') {
        return (
          <BarChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="periodNum" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="balance" stackId="a" fill="#9ae395" />
          </BarChart>
        )
      }
      if (this.props.visualType === 'Line') {
        return (
          <LineChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="periodNum" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="balance" stroke="#9ae395" />
          </LineChart>
        )
      }
      if (this.props.visualType === 'Area') {
        return (
          <AreaChart
            width={600}
            height={400}
            data={this.state.repaymentData}
            margin={{ top: 20, right: 10, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodNum" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="balance"
              stackId="1"
              stroke="#000000"
              fill="#9ae395"
            />
          </AreaChart>
        )
      }
    }
  }
}
export default KivaChart